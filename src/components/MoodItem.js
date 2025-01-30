import { URL_MOOK } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoodItem = ({item}) => {

    const {loggedInUser} = useContext(UserContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (
        <div className=" my-4 mt-8">
            <div className="flex justify-between items-center m-4">
                <h1 className="text-3xl font-semibold border-b-2 border-black pb-2"><span className="text-orange-500">{loggedInUser}! </span>{item.header.title}</h1>
            </div>          
                <div className="flex justify-between space-x-5 overflow-x-auto">             
                    {                       
                        item.gridElements.infoWithStyle.info.map((restro) => {
                            return (                                
                                <Link key={restro.id} to={restro.action.link}>
                                    <div  className="min-w-48 hover:cursor-pointer">
                                        <img src={URL_MOOK + restro.imageId} className="min-w-48" alt="" />
                                    </div>
                                </Link>                               
                            )
                        })                      
                    }                 
                </div>       
        </div>
    )

}

export default MoodItem;