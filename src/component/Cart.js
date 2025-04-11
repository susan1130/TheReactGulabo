import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartList from "./CartList";
//import AccordianList from "./AccordianList";


const Cart = () =>{
    const cItems = useSelector((store) => store.cart.items);
    console.log(cItems);

    const dispatchVariable = useDispatch();

    const handleClearCart = () => {
        dispatchVariable(clearCart());
    };
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold text-indigo-400">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    className="p-2 m-2 bg-indigo-50 text-indigo-900 rounded-lg"
                    onClick={handleClearCart}
                >Clear Cart</button>

                {cItems.length === 0 && (
                    <h2>Cart is empty. Add items to it !!</h2>
                )}
                <hr/>
                <CartList items={cItems}/>
            </div>
        </div>
    );
};

export default Cart;
