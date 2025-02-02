import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { clearCart} from '../utils/cartSlice';


const Cart = () => {
    const cartItems = useSelector((store) => store?.cart);

    const dispatch = useDispatch();

    const handleClaerCart = () => {
        dispatch(clearCart());
    };
    
    return (
        <div className="my-5 p-4">
            <h1 className="text-center text-2xl font-bold">Cart</h1>
            
            <div className="w-11/12 md:w-6/12 mx-auto">
                <div className="flex justify-end ">
                    <button className="border-2 bg-orange-400 hover:bg-orange-600 font-bold text-white p-2 rounded-lg text-xl" onClick={handleClaerCart}>Clear Cart</button>
                </div>
                <div>
                    {cartItems.items.length === 0 &&  <h1 className="text-center text-2xl bg-gray-200 m-4 p-4 rounded-lg">Your card is empty, Please Add some item!!! </h1>}
                    <ItemList items={cartItems.items}/> 
                </div>
               
            </div>
            
        </div>
        
    )
}

export default Cart;
