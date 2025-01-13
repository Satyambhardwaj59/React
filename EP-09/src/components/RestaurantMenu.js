import Shimmer from "./Shimmer";
import useRestaurantMenu from './../utils/useRestaurantMenu';
import { useParams } from "react-router";
import useRestaurantMenu from './../utils/useRestaurantMenu';


const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

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