import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { URL_RES_DATA } from "../utils/constants";
import { useParams } from "react-router";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(URL_RES_DATA + resId);
        const jsonData = await data.json();
        setResInfo(jsonData);
    }

    if(resInfo === null){
      return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu:</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}> {item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
            </ul>

        </div>
    )
}

export default RestaurantMenu;