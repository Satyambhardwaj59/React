import ItemList from "./ItemList";
import { useSelector } from "react-redux";


const Cart = () => {
    const cartItems = useSelector((store) => store?.cart?.item);
    console.log(cartItems); // getting undefind
    
    return (
        <div className="my-5 p-4 ">
            <h1 className="text-center text-2xl font-bold">Cart</h1>
            
            <div>
               <ItemList items={cartItems}/>
            </div>
            
        </div>
        
    )
}

export default Cart;
