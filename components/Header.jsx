import Body from "./Body";
import { FaShoppingCart } from "react-icons/fa";
// import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = function () {
  const onlineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");
  console.log("header render");

  //with dependency array , useEf only called after first render and once
  //without dep array, useEf called on each time compo render
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);
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
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <FaShoppingCart />
            </li>
            {/* <li>
              <Link to="/instamart">InstaMart</Link>
            </li> */}
            <button
              className="log-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
            <li className="px-4">
              Online Status : {onlineStatus ? "🟢" : "🔴"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
