import { URL_MOOK } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {

    const {loggedInUser} = useContext(UserContext);
    const { resData } = props;

    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla} = resData?.info;
    

    return (
        <div className="m-4 p-4 w-[250] h-[450] bg-gray-200 hover:bg-gray-300 rounded-lg" >
            <img className="max-h-40 w-[218] rounded-lg" src={URL_MOOK + cloudinaryImageId} alt="res logo" />
            <div className="card-dec">
                <h3 className='text-orange-600 text-xl pt-4 pb-2'>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating + " Stars"}</h4>
                <h4>{sla.deliveryTime + " min"}</h4>               
                <h4>User: {loggedInUser}</h4>
            </div>
        </div>
    )
}

export const withFlatOffer = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute ml-3 mt-1 px-3 py-1 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg">OFFER</label>
                <RestaurantCard  {...props} />
            </div>
        )
    }
}

export default RestaurantCard;