import { URL_MOOK } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { Link } from "react-router";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoodItem = ({item}) => {

    const {loggedInUser} = useContext(UserContext);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className=" my-4 mt-8">
            <div className="flex justify-between items-center m-4">
                <h1 className="text-3xl font-semibold border-b-2 border-black pb-2"><span className="text-orange-500">{loggedInUser}! </span>{item.header.title}</h1>
            </div>          
                <div className="w-full h-fit p-8">
                    <Slider {...settings}>             
                    {                       
                        item.gridElements.infoWithStyle.info.map((restro) => {
                            return (                                
                                <Link key={restro.id} to={restro.action.link}>
                                    <div id="slider-boxes" className="w-48 hover:cursor-pointer">
                                        <img src={URL_MOOK + restro.imageId} className="min-w-48" alt="" />
                                    </div>
                                </Link>                               
                            )
                        })                      
                    }     
                    </Slider>            
                </div>       
        </div>
    )

}

export default MoodItem;