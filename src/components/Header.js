import { URL_LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  // Subscribing to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  

    return (
        <div className="flex justify-between bg-pink-200 my-4 shadow-lg">
          <div >
            <img className="w-[120] ml-4" src = {URL_LOGO}  alt="logo" />
          </div>  
          <div className="flex items-center ">
            <ul className="flex space-x-6 p-3 m-3 text-2xl ">
                <li className="hover:border-b-2 hover:border-solid hover:border-black hover:bg-pink-400 hover:px-2"> <Link to="/">Home</Link></li>
                <li className="hover:border-b-2 hover:border-solid hover:border-black hover:bg-pink-400 hover:px-2"> <Link to="/about">About us</Link></li>
                <li className="hover:border-b-2 hover:border-solid hover:border-black hover:bg-pink-400 hover:px-2"> <Link to="/contact">Contact us</Link></li>
                <li className="hover:border-b-2 hover:border-solid hover:border-black hover:bg-pink-400 hover:px-2"> <Link to="/grocary">Grocary</Link></li>
                <li className="hover:border-b-2 hover:border-solid hover:border-black hover:bg-pink-400 hover:px-2"><Link to="/cart"> Cart -(<span className="text-orange-500">{cartItems.length}</span> items)</Link></li>
                <button className="border-2 border-solid border-black bg-orange-600 text-white px-2 py-1 rounded-lg" onClick={() => {
                  btnNameReact ==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                }}>{btnNameReact}</button>
                <li className="hover:border-b-2 hover:border-solid hover:border-black hover:bg-pink-400 hover:px-2">Online Status : {onlineStatus ? "✅" : "🔴"} </li>
                <li className="hover:border-b-2 hover:border-solid hover:border-black hover:bg-pink-400 hover:px-2"> <Link to="/about">{loggedInUser}</Link></li>
            </ul>
          </div>

        </div>
    )
}

export default Header;