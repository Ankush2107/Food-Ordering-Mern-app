const categoryItems = [
    {id: 1, title: "Dishes", des: "(99 dishes)", image: '/Images/category/category1.jpeg'},
    {id: 2, title: "Breakfast", des: "(15 breakfast)", image: '/Images/category/category2.jpeg'},
    {id: 3, title: "Dessert", des: "(46 dessert)", image: '/Images/category/category3.webp'},
    {id: 4, title: "Browse All", des: "(295 Items)", image: '/Images/category/category4.webp'},
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
