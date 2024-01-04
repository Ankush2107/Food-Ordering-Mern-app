import { Link } from "react-router-dom"

const Cards = ({ item }) => {
  return (
    
       <div className="card w-96 bg-base-100 shadow-xl">
            <Link to={`/menu/${item._id}`}>
                <figure>
                    <img 
                        src={item.image} 
                        alt="Foods" 
                    />
                </figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{ item.name }</h2>
                <p>{ item.recipe }</p>
                <div className="card-actions flex items-center justify-between mt-2">
                    <h5 className="font-semibold flex items-center"><span className="text-sm text-red mr-1">$</span>{ item.price }</h5>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    
  )
}

export default Cards
