import { BANNER_URL } from "../utils/constants";

const Banner = () => {
    return (
        <div className="relative w-full max-w-[1400px] mx-auto my-6">
            <img
                className="w-full h-[300px] md:h-[400px] object-cover rounded-[2.5rem]"
                src={BANNER_URL}
                alt="banner"
            />
            {/* Overlay Text */}
            <h1 className="absolute top-[70%] left-10 transform -translate-y-1/2 text-white text-4xl md:text-5xl font-bold shadow-lg">
                Best restaurants in Delhi
            </h1>
        </div>
    );
};


export default Banner;