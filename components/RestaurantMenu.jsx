//Build restaurant menu feature later on
// dynamic data requireds
// import { useSearchParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

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
  // console.log(res?.cards[0]?.card?.card?.info);
  const { itemCards } =
    res?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  /*console.log(
    res?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  );
*/
  const categories =
    res?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="m-10 p-2">
      <h1 className="font-bold my-5  text-2xl">{name}</h1>

      <span>
        <h4 className="font-bold p-1"> ⭐ {avgRating}</h4>
        <hr />

        <div className="flex">
          <h3 className="font-bold p-2">{sla.deliveryTime} mins</h3>

          <h3 className="font-bold p-2">{costForTwoMessage}</h3>
        </div>
      </span>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>
      <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-70" />
      {/* categories accordian*/}
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestarurantMenu;
