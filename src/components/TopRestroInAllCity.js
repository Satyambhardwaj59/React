import { Link } from "react-router";

const TopRestroInAllCity = ({Restro}) => {
    
    return (
        <div className="border-y-2 border-black">
            <h1 className="my-8 text-3xl font-bold">{Restro.title}</h1>
            <div className="flex flex-wrap justify-around align-middle space-y-4 ">
                {
                    Restro.brands.map((brand) => {
                        return (
                            <Link key={brand.link} to={brand.link}>
                                <div  className=" border-1 border-black m-4 p-4 w-[200] bg-gray-200 hover:bg-gray-300 rounded-lg">
                                    <div>
                                        {brand.text}
                                    </div>
                                
                                </div>
                            </Link>
                        )
                    })                   
                }
            </div>
        </div>

    )
}

export default TopRestroInAllCity;