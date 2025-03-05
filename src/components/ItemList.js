import { useDispatch } from 'react-redux';
import {URL_MOOK} from '../utils/constants';
import { addItem, clearCart, removeItem } from '../utils/cartSlice';
import { useState } from 'react';

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        setBtnBgColor('bg-orange-500');
    };

    const [btnBgColor, setBtnBgColor] = useState('bg-black');
    
    
    return (
        <div>
           {
            items.map((item) => {
               const {id, name, price, defaultPrice, description, imageId, isVeg } = item?.card?.info;
                
                return (
                    <div key={id} className="p-2 m-4 bg-gray-100 shadow-lg rounded-lg flex justify-between">
                        <div className='w-9/12 text-left'>
                            <div className='flex flex-col sm:flex-row ml-4 mt-3 sm:mt-0 space-x-6'>
                                <div className='mt-4'>
                                    <span className='text-3xl border-2 border-black border-solid p-1 rounded-lg'>{isVeg ? "🌱": "🔴"}</span>                
                                </div>
                                <div>
                                    <h1 className='font-semibold text-xl pt-2'>{name}</h1>
                                    <h2 className='font-semibold text-lg pt-1 text-orange-500'> --	₹ {price ? price / 100 : defaultPrice / 100}</h2>
                                </div>
                            </div>
                            
                            <p className='text-xs p-4 hidden sm:block'>{description}</p>
                        </div>
                        <div className=''>
                             <img src={URL_MOOK + imageId } className='w-40 h-28 rounded-xl px-4 bg-cover' alt="" />
                             <button className =   {` ${btnBgColor} text-white font-bold text-2xl mx-4 cursor-pointer px-2 `}
                             onClick={() => handleAddItem(item)} 
                             > Add +
                             </button>
                        </div>
                    </div>
                )
            })
           }
        </div>
    )
}

export default ItemList;


// const handleRemoveItem = () => {
    //     dispatch(removeItem());
    // };

    // const handleClaerCart = () => {
    //     dispatch(clearCart());
    // };
    


                             {/* <span onClick={handleRemoveItem}> - </span>
                             <span onClick={handleClaerCart}> 0 </span> */}