import {URL_MOOK} from '../utils/constants';

const ItemList = ({items}) => {
    
    return (
        <div>
           {
            items.map((item) => {
                const {id, name, price, defaultPrice, description, imageId, isVeg } = item.card.info;
                
                return (
                    <div key={id} className="p-2 m-4 bg-gray-100 shadow-lg rounded-lg flex justify-between">
                        <div className='w-9/12 text-left'>
                            <div className='flex ml-4 space-x-6'>
                                <div className='mt-4'>
                                    <span className='text-3xl border-2 border-black border-solid p-1 rounded-lg'>{isVeg ? "🌱": "🔴"}</span>                
                                </div>
                                <div>
                                    <h1 className='font-semibold text-xl pt-2'>{name}</h1>
                                    <h2 className='font-semibold text-lg pt-1 text-orange-500'> --	₹ {price ? price / 100 : defaultPrice / 100}</h2>
                                </div>
                            </div>
                            
                            <p className='text-xs p-4'>{description}</p>
                        </div>
                        <div className=''>
                             <img src={URL_MOOK + imageId } className='w-40 h-28 rounded-xl px-4 bg-cover' alt="" />
                             <p className='bg-black text-white font-bold text-2xl mx-4 cursor-pointer'>ADD +</p>
                        </div>
                    </div>
                )
            })
           }
        </div>
    )
}

export default ItemList;