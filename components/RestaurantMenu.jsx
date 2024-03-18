//Build restaurant menu feature later on
// dynamic data requireds
// import { useSearchParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestarurantMenu = () => {
  const { resId } = useParams();
  // const [res, setRes] = useState({});

  //don't need to worry about how to fetch data only displaying data
  //no need to keep track of this state
  //Creating own Custom Hooks
  const res = useRestaurantMenu(resId);
  console.log(res); // const [menuItems, setMenuItems] = useState([]);
  if (res === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
    aggregatedDiscountInfo,
  } = res?.cards[0]?.card?.card?.info;
  const { itemCards } =
    res?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>

      <span>
        <h4>
          rating : {avgRating}
          <br />
          delivery Time : {sla.deliveryTime}
        </h4>
      </span>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
    </div>
  );
};
export default RestarurantMenu;
