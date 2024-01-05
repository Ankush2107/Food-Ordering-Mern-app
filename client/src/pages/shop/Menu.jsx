import { useEffect, useState } from "react";
import Cards from "../../components/Cards";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    // loading data
    useEffect(() => {
        // fatch data from the the backend
        const fetchData = async () => {
            try {
                const response = await fetch('/menu.json');
                const data = await response.json();
                setMenu(data);
                setFilteredItems(data);
            } catch(e) {
                console.log("Error fetching data", e);
            }
        }

        // Call the function
        fetchData();
    }, []);

    // filter item based on category
    const filterItems = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
    };

    // show all data function
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory('all');
    }

    // sorting based on A-Z, Z-A, Low-High pricing
    const handleSortChange = (option) => {
        setSortOption(option);

        let sortedItems = [...filteredItems];

        // logic
        switch(option) {
            case "A-Z": 
                sortedItems.sort((a, b) => a.name.localCompare(b.name));
            break;
            case "Z-A": 
                sortedItems.sort((a, b) => b.name.localCompare(a.name));
            break; 
            case "low-to-high": 
                sortedItems.sort((a, b) => a.price - b.price);
            break; 
            case "high-to-low": 
                sortedItems.sort((a, b) => b.price - a.price);
            break;
            default:
            break;    
        }

        setFilteredItems(sortedItems);
    } 


  return (
    <div>

        {/* Menu Banner */}
        <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0%  to-[#FCFCFC] to-100%">
            <div className="py-48 flex flex-col justify-center items-center gap-8">
                <div className="text-center space-y-7 px-4 ">

                    <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">For the Love of Delicious <span className="text-[#E59632]">Food</span></h2>

                    <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">Come with family & feel the joy of mouthwatering food such as Greek salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas Rellenas and more for moderate cost.</p>

                    <button className="btn bg-[#E59632] hover:bg-[#e5a24b] px-8 py-3 font-semibold text-white rounded-full">Order now</button>            
                </div>
            </div>
        </div>

        {/* Menu shop section */}
        <div className="section-container">
            {/* filtering and sorting */}
            <div>Filtering and sorting</div>

            {/* product card */}
            <div className="px-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    filteredItems.map((item) => (
                        <Cards key={item._id} item={item} />
                    ))
                }
            </div>

            
        </div>
    </div>
  )
}

export default Menu;
