import mainDish from "../../assets/Images/category1.jpeg"
import breakfast from "../../assets/Images/category2.jpeg"
import dessert from "../../assets/Images/category3.webp"
import browseAll from "../../assets/Images/category4.webp"

const categoryItems = [
    {id: 1, title: "Dishes", des: "(99 dishes)", image: mainDish},
    {id: 2, title: "Breakfast", des: "(15 breakfast)", image: breakfast},
    {id: 3, title: "Dessert", des: "(46 dessert)", image: dessert},
    {id: 4, title: "Browse All", des: "(295 Items)", image: browseAll},
];

const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favourites</p>
        <h2 className="title">Popular Categories</h2>
      </div>

      {/* Category Card */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {
          categoryItems.map((item, index) => (
            <div key={index} className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all">
                <div className=" flex items-center justify-center">
                    <img src={item.image} alt="Main Dish" className="bg-[#e59732ac] p-5 rounded-full w-28 h-28 " />
                </div>
                <div className="mt-5 space-y-1">
                  <h5>{item.title}</h5>
                  <p>{item.des}</p>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories;
