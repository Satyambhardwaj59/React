const RestaurantCategeory = (data) => {

    const {title, itemCards} = data?.data;
    console.log(title);
    
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 flex justify-between">
                <span className="font-semibold text-lg">{title}  ({itemCards.length})</span>
                <span>🔽</span>
            </div>
        </div>
    )
}

export default RestaurantCategeory;