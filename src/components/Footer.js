import { URL_LOGO } from "../utils/constants";


const Footer = () => {
    return (
        <div className="flex justify-around my-4 py-8 px-4 mx-auto border border-solid border-black bg-gray-200" >
            <div className="copyR" >
                    <img className="w-28 cursor-pointer mb-4 " src={URL_LOGO} alt="footer-logo" />
                    <h3 className="text-xl font-semibold hover:text-orange-500 hover:cursor-pointer"> © Copyright Satyam Bhardwaj</h3>
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
