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
      <div className="flex">
        <div className="logo-container">
          {/* <img src={LOGO_URL} alt="logo" width={50} height={50} /> */}

          <h1 className="jockey-one-regular">FoodDash</h1>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
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
            <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
