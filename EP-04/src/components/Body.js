import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mookData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search your fev Restro..." />
                <button>Search</button>
            </div>
            <div className="res-container">
                {
                    resList.map(restaurant => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
                ))}
                
            </div>
        </div>
    )
}

export default Body;