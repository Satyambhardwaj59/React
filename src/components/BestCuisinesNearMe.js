import { Link } from "react-router";

const BestCuisinesNearMe = ({cusines}) => {
        return (
            <div className="border-b-2 border-black">
                <h1 className="my-8 text-3xl font-bold">{cusines.title}</h1>
                <div className="flex flex-wrap justify-around align-middle my-4">
                    {
                        cusines.brands.map((cusine) => {
                            return (
                                <Link key={cusine.link} to={cusine.link}>
                                    <div  className=" border-1 border-black m-4 p-4 w-[200] bg-gray-200 hover:bg-gray-300 rounded-lg">
                                        <div>
                                            {cusine.text+ ".."}
                                        </div>
                                    
                                    </div>
                                </Link>
                            )
                        })                   
                    }
                </div>
            </div>
    
        )
    
};

export default BestCuisinesNearMe;