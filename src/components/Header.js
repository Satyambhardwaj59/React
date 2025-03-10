import { URL_LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // Subscribing to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="shadow-md bg-gray-200">
      <div className="md:flex justify-around max-w-[1400px] mx-auto">

        <div>
          <img className="w-[120] px-4 rounded-full py-4" src={URL_LOGO} alt="logo" />

        </div>
        <div className="flex items-center">
          <div onClick={() => setShowMenu(!showMenu)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            {showMenu ? '✖' : '☰'}
          </div>
          <div className="">
            <ul
              className={`text-2xl md:flex md:justify-around md:items-center md:pb-0 pb-12 md:gap-6 md:static absolute top-0 left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${showMenu ? "top-[130px] opacity-100" : "top-[-500px] opacity-0"
                } md:opacity-100 bg-white md:bg-transparent z-50 shadow-md md:shadow-none`}
            >
              <li className="mb-2 hover:text-orange-500">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2 hover:text-orange-500">
                <Link to="/about">About us</Link>
              </li>
              <li className="mb-2 hover:text-orange-500">
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="mb-2 hover:text-orange-500">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className="mb-2 hover:text-orange-500">
                <Link to="/cart">

                  Cart - (<span className="text-orange-500">{cartItems.length}</span>)

                </Link>
              </li>
              <button
                className="mb-2 border-2 border-black bg-orange-600 text-white px-2 py-1 rounded-lg"
                onClick={() =>
                  btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                }
              >
                {btnNameReact}
              </button>
              <li className="mb-2 hover:text-orange-500">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
              <li className="mb-2 hover:text-orange-500">
                <Link to="/about">{loggedInUser}</Link>
              </li>
            </ul>


          </div>


        </div>


      </div>
    </div>
  )
}

export default Header