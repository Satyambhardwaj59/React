import { BANNER_URL } from "../utils/constants";

const Banner = () => {
    return (
        <div className="">
            <h1 className="text-5xl text-white absolute top-2/3 left-28">Order Food Online in Delhi</h1>
            <img className=" my-4 mx-auto object-cover" src={BANNER_URL} alt="banner" />
            
        </div>
    )
}

export default Banner;