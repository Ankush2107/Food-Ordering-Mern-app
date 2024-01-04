import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import Cards from "../../components/Cards";

const SpecialDishes = () => {
    const [recipes, setRecipes] = useState([]);
    const slider = useRef(null);

    useEffect(() => {
        axios.get('/menu.json')
          .then((response) => {
            const specials = response.data.filter((item) => item.category === 'popular');
            // console.log(specials);
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
        slidesToShow: 4,
        slidesToScroll: 4,
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
        ]
      };
  return (
    <div className="section-container my-20">
       <div className="text-left">
            <p className="subtitle">Special Dishes</p>
            <h2 className="title md:w-[520px]">Standout Dishes From Our Menu</h2>
       </div>
       <Slider {...settings}>
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
