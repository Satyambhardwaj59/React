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
        <div className="m-12 border-2 border-solid border-gray-600 p-6">
            <h1 className="text-3xl text-orange-600 my-4">{name}</h1>
            <h3 className="text-2xl my-3">{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2 className="text-2xl my-3">Menu:</h2>
            <ul className="text-xl my-3">
                {itemCards.map(item => <li key={item.card.info.id}> {item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
            </ul>

        </div>
    )
}

export default RestaurantMenu;