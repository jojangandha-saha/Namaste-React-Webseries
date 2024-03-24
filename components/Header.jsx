import Body from "./Body";
import { FaShoppingCart } from "react-icons/fa";
// import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = function () {
  const onlineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
  // console.log("header render");

  //CONTEXT
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  //with dependency array , useEf only called after first render and once
  //without dep array, useEf called on each time compo render
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  //Subscribing to the store using selectors
  //selector - it's hook
  //subscribed
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex justify-between p-4 m-1 mb-3 shadow-md shadow-outer">
        <div className="logo-container">
          {/* <img src={LOGO_URL} alt="logo" width={50} height={50} /> */}

          <h1 className="text-3xl font-bold font-mono cursor-pointer">
            <Link to="/"> FoodDash</Link>
          </h1>
        </div>
        <div className="flex items-center">
          <ul className="flex ">
            <li className="px-4 font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 font-bold">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 font-bold">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 flex">
              <Link to="/cart" className="p-1 font-bold">
                Cart({cartItems.length})
              </Link>
              <FaShoppingCart className="m-2" />
            </li>
            {/* <li>
              <Link to="/instamart">InstaMart</Link>
            </li> */}
            <button
              className="log-btn font-bold"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
            <li className="px-4 ">
              Online Status : {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
