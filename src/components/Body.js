import RestaurantCard, {withFlatOffer} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { URL_RESTAURANT_CARD } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfResto, setListOfResto] = useState([]);
    const [filterdRestaurant, setFilterdRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardWithOffer = withFlatOffer(RestaurantCard);
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(URL_RESTAURANT_CARD);

        const json = await data.json();

        setListOfResto(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Look's Like your Internet is tern off Please check your connection !!!</h1>;

    return listOfResto.length === 0 ? <Shimmer/> :  (
        <div className="body">
                <div className="search m-4 p-4 flex space-x-5 ">
                    <input type="text" className="border border-solid border-black p-2 rounded-xl" placeholder="Search for Restaurants" value={searchText}  onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="border border-solid border-black p-2 rounded-xl bg-slate-500 text-white" onClick={ () => {
                        console.log(searchText);

                        const filterdRestro = listOfResto.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterdRestaurant(filterdRestro);

                    }}>Search</button>
                     <button className="filter-btn border border-solid border-black p-2 rounded-xl bg-slate-500 text-white " onClick = {  () => {
                        const filterdList = listOfResto.filter(
                         (res) => res.info.avgRating > 4.2
                          );               
                         setFilterdRestaurant(filterdList);
                          }
                         }>Top Rated Restro..</button>
                </div>
               
            
            <div className="flex flex-wrap justify-around space-y-4">
                {
                    filterdRestaurant.map(restaurant => (
                   <Link key = {restaurant.info.id} to={"/restaurent/" + restaurant.info.id}>
                  {
                        restaurant.info.avgRating > 4.2 ? <RestaurantCardWithOffer  resData = {restaurant} /> :
                        <RestaurantCard  resData = {restaurant} />
                  }
                     </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Body;