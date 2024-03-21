import { useState } from "react";
import Itemlist from "./Itemlist";

//this restaurantcategory(child) - controlled compo by restaurant menu(parent) is controlled by restaurant menu as it
//doesn't have it;s own state, it;s state is controlled by parent component- uncontrolled compo
function RestaurantCategory({ data, showItems, setShowIndex, dummy }) {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div className="mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <Itemlist items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
}
export default RestaurantCategory;
