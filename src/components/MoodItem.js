import { URL_MOOK } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const MoodItem = ({item}) => {

    const {loggedInUser} = useContext(UserContext);

    console.log(item.header.title);
    
    console.log(item);
    console.log(item.gridElements.infoWithStyle.info);
    
    

    return (
        <div className="w-11/12 mx-auto my-4 mt-8">
            <div className="flex justify-between items-center m-4">
                <h1 className="text-3xl font-semibold border-b-2 border-black pb-2"><span className="text-orange-500">{loggedInUser}! </span>{item.header.title}</h1>
                <div>
                    <button className="w-10 border border-black rounded-full p-2 mx-4">⬅️</button>
                    <button className="w-10 border border-black rounded-full p-2 ">➡️</button>
                </div>
            </div>
            <div className="flex justify-between space-x-5 overflow-x-auto">
                {
                    item.gridElements.infoWithStyle.info.map((restro) => {
                        
                        return (
                            <div key={restro.id} className="min-w-48 hover:cursor-pointer">
                                <img src={URL_MOOK + restro.imageId} className="min-w-48" alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default MoodItem;