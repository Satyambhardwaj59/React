import { useEffect, useState } from "react";
import { URL_RES_DATA } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect( () => {
        fetchMenu();
    })

    const fetchMenu = async () => {
        const data = await fetch(URL_RES_DATA + resId);
        const jsonData = await data.json();
        setResInfo(jsonData);
    }

    return resInfo;
}

export default useRestaurantMenu;