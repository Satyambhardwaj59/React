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
    <div className="shadow-md  my-4">
      <div className="md:flex justify-between bg-gray-200 ">
        <div >
          <img className="w-[120] rounded-full " src={URL_LOGO} alt="logo" />
        </div>
        <div>
          <div onClick={() => setShowMenu(!showMenu)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            {showMenu ? '✖' : '☰'}
          </div>
          <div className="  mt-14 mr-4">
            <ul className={`text-2xl md:flex md:justify-around md:items-center md:pb-0 pb-12 md:gap-6 md:static md:z-auto z-[-1] left-0 w-full   md:pl-0 pl-10 transition-all duration-500 ease-in ${showMenu ? 'top-[130] text-left w-[200] mx-auto justify-center opacity-100' : 'top-[-490px] h-0'} md:opacity-100 opacity-0 `}>
              <li className="mb-2 hover:text-orange-500 "> <Link to="/">Home</Link></li>
              <li className="mb-2 hover:text-orange-500 "> <Link to="/about">About us</Link></li>
              <li className="mb-2 hover:text-orange-500 "> <Link to="/contact">Contact us</Link></li>
              <li className="mb-2 hover:text-orange-500 "> <Link to="/grocary">Grocary</Link></li>
              <li className="mb-2 hover:text-orange-500 "><Link to="/cart"> Cart -(<span className="text-orange-500">{cartItems.length}</span> items)</Link></li>
              <button className="mb-2 border-2 border-solid border-black bg-orange-600 text-white px-2 py-1 rounded-lg" onClick={() => {
                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
              }}>{btnNameReact}</button>
              <li className="mb-2 hover:text-orange-500 ">Online Status : {onlineStatus ? "✅" : "🔴"} </li>
              <li className="mb-2 hover:text-orange-500 "> <Link to="/about">{loggedInUser}</Link></li>
          </ul>
         </div>

        </div>

      </div>
    </div>
  )
}

export default Header;

// return (
//   <div className="flex justify-between bg-gray-200 my-4 shadow-lg">
//     <div >
//       <img className="w-[120]" src={URL_LOGO} alt="logo" />
//     </div>
//     <div className="flex items-center ">
//       {/* <ul className="flex space-x-6 p-3 m-3 text-2xl "> */}
//       <div onClick={() => setShowMenu(!showMenu)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
//         {showMenu ? '✖' : '☰'}
//       </div>
//       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-800 md:z-auto z-[-1] left-0 w-full  md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${showMenu ? 'top-[130] opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0 mx-auto`}>
//         <li className="hover:border-b-2 hover:border-solid hover:border-black hover:text-orange-500 "> <Link to="/">Home</Link></li>
//         <li className="hover:border-b-2 hover:border-solid hover:border-black hover:text-orange-500 "> <Link to="/about">About us</Link></li>
//         <li className="hover:border-b-2 hover:border-solid hover:border-black hover:text-orange-500 "> <Link to="/contact">Contact us</Link></li>
//         <li className="hover:border-b-2 hover:border-solid hover:border-black hover:text-orange-500 "> <Link to="/grocary">Grocary</Link></li>
//         <li className="hover:border-b-2 hover:border-solid hover:border-black hover:text-orange-500 "><Link to="/cart"> Cart -(<span className="text-orange-500">{cartItems.length}</span> items)</Link></li>
//         <button className="border-2 border-solid border-black bg-orange-600 text-white px-2 py-1 rounded-lg" onClick={() => {
//           btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
//         }}>{btnNameReact}</button>
//         <li className="hover:border-b-2 hover:border-solid hover:border-black hover:text-orange-500 ">Online Status : {onlineStatus ? "✅" : "🔴"} </li>
//         <li className="hover:border-b-2 hover:border-solid hover:border-black hover:text-orange-500 "> <Link to="/about">{loggedInUser}</Link></li>
//       </ul>
//     </div>

//   </div>
// )