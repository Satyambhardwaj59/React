import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mookData";
import { useState } from "react";

const Body = () => {

    const [listOfResto, setListOfResto] = useState(resList);
    const setData = () => {
        const filterdList = listOfResto.filter(
            (res) => res.info.avgRating > 4.2
        );               
        setListOfResto(filterdList);
    }

    return (
        <div className="body">
            <div className="search">
                <button className="filter-btn" onClick = { setData}>Top Rated Restro..</button>
            </div>
            <div className="res-container">
                {
                    listOfResto.map(restaurant => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
                ))}
                
            </div>
        </div>
    )
}

export default Body;