import { useState } from "react"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"

const Cards = ({ item }) => {
    const [isHeartFillted, setIsHeartFillted] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFillted(!isHeartFillted);
    }
  return (
    
       <div className="card w-96 bg-base-100 shadow-xl">
          <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-[#E59632] ${isHeartFillted ? "text-rose-500" : "text-white"} `} onClick={handleHeartClick}>
            <FaHeart className="h-5 w-5 cursor-pointer "/>
          </div>  
            <Link to={`/menu/${item._id}`}>
                <figure>
                    <img 
                        src={item.image} 
                        alt="Foods" 
                        className="hover:scale-105 transition-all duration-200 md:h-72"
                    />
                </figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{ item.name }</h2>
                <p>{ item.recipe }</p>
                <div className="card-actions flex items-center justify-between mt-2">
                    <h5 className="font-semibold flex items-center"><span className="text-sm text-red mr-1">$</span>{ item.price }</h5>
                    <button className="btn bg-[#E59632] text-white">Buy Now</button>
                </div>
            </div>
        </div>
  )
}

export default Cards
