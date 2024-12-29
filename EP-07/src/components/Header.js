import { URL_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className="header">
          <div >
            <img className="logo" src = {URL_LOGO}  alt="logo" />
          </div>  
          <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => {
                  btnNameReact ==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                }}>{btnNameReact}</button>
            </ul>
          </div>

        </div>
    )
}

export default Header;