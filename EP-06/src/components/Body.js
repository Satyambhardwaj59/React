import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mookData";
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfResto, setListOfResto] = useState(resList);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        
    }

    return (
        <div className="body">
            <div className="search">
                <button className="filter-btn" onClick = {  () => {
        const filterdList = listOfResto.filter(
            (res) => res.info.avgRating > 4.2
        );               
        setListOfResto(filterdList);
    }
    }>Top Rated Restro..</button>
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