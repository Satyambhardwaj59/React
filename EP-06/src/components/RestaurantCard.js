import { URL_MOOK } from "../utils/constants";

const RestaurantCard = (props) => {

    const { resData } = props;

    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla} = resData?.info;

    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0"
        }}>
            <img className="res-logo" src={URL_MOOK + cloudinaryImageId} alt="res logo" />
            <div className="card-dec">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating}</h4>
                <h4>{sla.deliveryTime + " min"}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;