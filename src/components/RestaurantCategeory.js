import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategeory = ({data, showItems, setShowIndex}) => {

     const {title, itemCards} = data;
     //const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();
     }
    
    return (
        <div>
            <div className="w-11/12 md:w-6/12 mx-auto my-4 bg-gray-200 rounded-lg shadow-lg p-4">

                <div className="flex justify-between w-full cursor-pointer" 
                    onClick={handleClick}
                >
                    <span className="font-semibold text-lg">{title}  ({itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategeory;