import { URL_LOGO } from "../utils/constants";

const Header = () => {
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
            </ul>
          </div>

        </div>
    )
}

export default Header;