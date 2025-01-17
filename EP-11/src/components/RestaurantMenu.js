import Shimmer from "./Shimmer";
import useRestaurantMenu from './../utils/useRestaurantMenu';
import { useParams } from "react-router";
import useRestaurantMenu from './../utils/useRestaurantMenu';
import RestaurantCategeory from "./RestaurantCategeory";
import {URL_MOOK} from '../utils/constants';
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if(resInfo === null){
      return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage, cloudinaryImageId} = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    return (
        <div className="text-center">
            <h1 className="text-3xl text-orange-600 my-6 font-bold">{name}</h1>
            <div className="flex justify-between w-6/12 mx-auto my-4 bg-gray-100 rounded-lg shadow-lg p-4">
                <p className="text-xl font-bold my-3 text-center">{cuisines.join(", ")} - {costForTwoMessage}</p>
                <img src={URL_MOOK + cloudinaryImageId } className="w-40 h-28 rounded-xl pl-4 bg-cover" alt="" />
            </div>
            {categories.map((category, index) => (
                // controled component
                <RestaurantCategeory 
                key={category?.card?.card?.title} 
                data={category?.card?.card}
                showItems={index === showIndex && true}
                setShowIndex={() => setShowIndex(index)}
                />
        ))}
        </div>
    )
}

export default RestaurantMenu;