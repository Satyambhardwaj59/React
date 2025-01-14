import { URL_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
// import Grocary from './Grocary';

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-200 my-4 shadow-lg">
          <div >
            <img className="w-[120] ml-4" src = {URL_LOGO}  alt="logo" />
          </div>  
          <div className="flex items-center ">
            <ul className="flex space-x-6 p-3 m-3 text-2xl">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About us</Link></li>
                <li> <Link to="/contact">Contact us</Link></li>
                <li> <Link to="/grocary">Grocary</Link></li>
                <li> <Link to="/cart">Cart</Link></li>
                <button className="border-2 border-solid border-black bg-orange-600 text-white px-2 py-1 rounded-lg" onClick={() => {
                  btnNameReact ==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                }}>{btnNameReact}</button>
                <li>Online Status : {onlineStatus ? "✅" : "🔴"} </li>
            </ul>
          </div>

        </div>
    )
}

export default Header;