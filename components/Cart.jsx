import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  //read the cart from store
  //subscribe to the store
  //when using selector make sure you are subsribing to right portion of store
  //DON'T SUBSCRUIBE TO WHOLE STORE -> only small portion of store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <>
              <h3 className="font-bold text-slate-700 text-xl ">
                Your cart is empty
              </h3>
              <h2 className="text-slate-500 font-thin">
                You can go to home page to view more restaurants
              </h2>

              {/* to take to home page <button></button> */}
              <Link to="/">
                <button className="p-4 m-4 bg-black text-white rounded-lg">
                  see restaurants near you
                </button>
              </Link>
            </>
          )}
          <Itemlist items={cartItems} />
        </div>
      </div>
    </>
  );
};
export default Cart;
