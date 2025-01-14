import { URL_MOOK } from "../utils/constants";

const RestaurantCard = (props) => {

    const { resData } = props;

    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla, locality, areaName} = resData?.info;

    return (
        <div className="m-4 p-4 w-[250] bg-gray-200 hover:bg-gray-300" >
            <img className="" src={URL_MOOK + cloudinaryImageId} alt="res logo" />
            <div className="card-dec">
                <h3 className='text-orange-600 text-xl'>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating + " Stars"}</h4>
                <h4>{sla.deliveryTime + " min"}</h4>
                <h4>{locality + ", " + areaName}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;