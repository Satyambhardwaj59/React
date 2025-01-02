import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {

    const [listOfResto, setListOfResto] = useState([]);
    const [filterdRestaurant, setFilterdRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setListOfResto(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfResto.length === 0 ? <Shimmer/> :  (
        <div className="body">
            <div className="filter">
                <div className="search-bar">
                    <input type="text" className="search-box" placeholder="Search for Restaurants" value={searchText}  onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={ () => {
                        console.log(searchText);

                        const filterdRestro = listOfResto.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterdRestaurant(filterdRestro);

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick = {  () => {
        const filterdList = listOfResto.filter(
            (res) => res.info.avgRating > 4.2
        );               
        setFilterdRestaurant(filterdList);
    }
    }>Top Rated Restro..</button>
            </div>
            <div className="res-container">
                {
                    filterdRestaurant.map(restaurant => (
                   <Link key = {restaurant.info.id} to={"/restaurent/" + restaurant.info.id}> <RestaurantCard  resData = {restaurant} /> </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Body;