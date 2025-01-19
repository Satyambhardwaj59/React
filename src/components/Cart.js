import ItemList from "./ItemList";
import { useSelector } from "react-redux";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.item);
    
    return (
        <div className="my-5 p-4 ">
            <h1 className="text-center text-2xl font-bold">Cart</h1>
            
            <ItemList items={cartItems} />
            
        </div>
        
    )
}

export default Cart;
