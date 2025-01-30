import { URL_LOGO } from "../utils/constants";
import { Link } from "react-router";


const Footer = () => {
    return (
        <div className="flex justify-around my-4 py-8 px-4 mx-auto border border-solid border-black bg-gray-200" >
            <div className="copyR" >
                    <img className="w-28 cursor-pointer mb-4 " src={URL_LOGO} alt="footer-logo" />
                    <h3 className="text-xl font-semibold hover:text-orange-500 hover:cursor-pointer"> © Copyright Satyam Bhardwaj</h3>
                    <div className="flex justify-around items-center mt-4">
                        <Link to="https://www.linkedin.com/in/satyam-kumar-297a3b27b/">
                            <img className="w-8 m-2 cursor-pointer" src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link to="https://www.facebook.com/share/1Fk2UdycXG/">
                            <img className="w-8 m-2 cursor-pointer" src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" />
                        </Link>
                        <Link to=" https://twitter.com/SatyamB38363219"> 
                            <img className="w-8 m-2 cursor-pointer" src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />   
                        </Link>
                        <Link to="https://www.instagram.com/satyamsingh9858">
                            <img className="w-8 m-2 cursor-pointer" src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" />
                        </Link>
                        <Link to="https://github.com/Satyambhardwaj59">
                            <img className="w-8 m-2 cursor-pointer" src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github" />
                        </Link>
                        
                    </div>
            </div>
            <div className="">
                <ul className="flex flex-col gap-y-4 text-xl list-none ">
                    <li className="hover:text-orange-500 hover:cursor-pointer">Home</li>
                    <li className="hover:text-orange-500 hover:cursor-pointer">About us</li>
                    <li className="hover:text-orange-500 hover:cursor-pointer">Contact us</li>
                    <li className="hover:text-orange-500 hover:cursor-pointer">Email</li>
                </ul>
            </div>
            <div className="">
                <ul className="flex flex-col gap-y-4 text-xl list-none ">
                    <li className="hover:text-orange-500 hover:cursor-pointer">Home</li>
                    <li className="hover:text-orange-500 hover:cursor-pointer">About us</li>
                    <li className="hover:text-orange-500 hover:cursor-pointer">Contact us</li>
                    <li className="hover:text-orange-500 hover:cursor-pointer">Email</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer;
