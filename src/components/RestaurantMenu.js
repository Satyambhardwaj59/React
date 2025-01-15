import Shimmer from "./Shimmer";
import useRestaurantMenu from './../utils/useRestaurantMenu';
import { useParams } from "react-router";
import useRestaurantMenu from './../utils/useRestaurantMenu';
import RestaurantCategeory from "./RestaurantCategeory";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
      return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);
    

    return (
        <div className="text-center">
            <h1 className="text-3xl text-orange-600 my-6 font-bold">{name}</h1>
            <p className="text-xl font-bold my-3">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category) => (
                <RestaurantCategeory data={category?.card?.card}/>
        ))}
           
           
           
           
           
            {/* <h2 className="text-2xl my-3">Menu:</h2>
            <ul className="text-xl my-3">
                {itemCards.map(item => <li key={item.card.info.id}> {item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
            </ul> */}

        </div>
    )
}

export default RestaurantMenu;