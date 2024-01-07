import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import Cards from "../../components/Cards";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={ className } style={{ ...style, display: "block", background: "red" }} onClick={onClick} >
      NEXT
    </div>
  )
}

const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={ className } style={{ ...style, display: "block", background: "green" }} onClick={onClick} >
      BACK
    </div>
  )
}

const SpecialDishes = () => {
    const [recipes, setRecipes] = useState([]);
    const slider = useRef(null);

    useEffect(() => {
      fetch("/menu.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          const specials = data.filter((item) => item.category === "popular");
          setRecipes(specials);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    //  setting from slider
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <simpleNextArrow/>,
        prevArrow: <simplePrevArrow /> 
      };
  return (

    <div className="section-container my-20 relative">
       <div className="text-left">
            <p className="subtitle">Special Dishes</p>
            <h2 className="title md:w-[520px]">Standout Dishes From Our Menu</h2>
       </div>

       {/* Arrow btn */}
       <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
          <button onClick={() => slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5"><FaAngleLeft className="w-6 h-6 p-1"/></button>
          <button onClick={() => slider?.current?.slickNext()} className="btn p-2 rounded-full ml-5 bg-[#E59632]"><FaAngleRight className="w-6 h-6 p-1"/></button>
       </div>

       {/* Crousels */}
       <Slider ref={ slider } {...settings}>
          {
            recipes.map((item, index) => (
                <Cards key={index} item={item} />
            ))
          }
        </Slider>
    </div>
  )
}

export default SpecialDishes;
