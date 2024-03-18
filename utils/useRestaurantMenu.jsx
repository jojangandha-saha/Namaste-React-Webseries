import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetch data and return info
  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4930383&lng=88.36645080000001&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json?.data);
    setResInfo(json?.data);
  }
  return resInfo; //local variable for the hook
};

export default useRestaurantMenu;
