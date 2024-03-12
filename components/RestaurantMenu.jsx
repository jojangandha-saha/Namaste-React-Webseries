// dynamic data requireds
import { useSearchParams } from "react-router-dom";
import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestarurantMenu = function () {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const { name, cuisines, avgRating, costForTwo } =
    resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
      ?.info;
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      {/* img */}
      <p>{cuisines.join(",")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h2>Menu</h2>
      <ul>
        <li>Burgers</li>
        <li>Diet coke</li>
        <li>Pastries</li>
      </ul>
    </div>
  );
};
export default RestarurantMenu;
