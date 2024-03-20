import { useState } from "react";
import Itemlist from "./Itemlist";

function RestaurantCategory({ data }) {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
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

        {showItems && <Itemlist items={data.itemCards} />}
      </div>
    </div>
  );
}
export default RestaurantCategory;
