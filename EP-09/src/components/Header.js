import { URL_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
// import Grocary from './Grocary';

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
          <div >
            <img className="logo" src = {URL_LOGO}  alt="logo" />
          </div>  
          <div className="nav-items">
            <ul>
                <li>Online Status : {onlineStatus ? "✅" : "🔴"} </li>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About us</Link></li>
                <li> <Link to="/contact">Contact us</Link></li>
                <li> <Link to="/grocary">Grocary</Link></li>
                <li> <Link to="/cart">Cart</Link></li>
                <button className="login-btn" onClick={() => {
                  btnNameReact ==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                }}>{btnNameReact}</button>
            </ul>
          </div>

        </div>
    )
}

export default Header;