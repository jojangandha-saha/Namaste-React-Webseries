import ResturantCards from "./ResturantCards";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
// import resturanList from "../utils/mockData";
const Body = function () {
  // const api_url =
  //   "https://corsproxy.io/?" +
  //   encodeURIComponent(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4930383&lng=88.36645080000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //State variable creation
  const [listOfRes, setlistOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [priceList, setPriceList] = useState(resturanList);

  //whenever state variables updates, react triggers reconciliation cycle
  //it rerenders the component
  console.log("Body rerenders", listOfRes);
  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    //optional chaining
    //structure of data changed.
    setlistOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <Shimmer />;

  //Conditonal rendering
  // if (listOfRes.length === 0) {
  //   return <Shimmer />;
  // }

  //Normal JS variable
  //  let listOfResJs = [
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "74453",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         costForTwo: 40000,
  //         deliveryTime: 45,
  //         avgRating: "4.0",
  //       },
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "74454",
  //         name: "PIzzaria",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         costForTwo: 45000,
  //         deliveryTime: 45,
  //         avgRating: "4.5",
  //       },
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "74455",
  //         name: "Wow Momo",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Momos, Chinese"],
  //         costForTwo: 50000,
  //         deliveryTime: 45,
  //         avgRating: "4.1",
  //       },
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "74457",
  //         name: "Starbucks",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Coffee, Tea"],
  //         costForTwo: 55000,
  //         deliveryTime: 45,
  //         avgRating: "4.0",
  //       },
  //     },
  //   ];
  //Conditional rendering using ternary operator
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="filter flex">
          <div className="search m-2 p-2">
            <input
              type="text"
              className="border border-solid border-zinc-500 p-1 rounded-md "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Type here to searh"
            />

            <button
              className=" bg-transparent ... font-medium text-black px-4 py-1 m-4 rounded-full  border border-solid border-slate-700"
              onClick={() => {
                //filter restaurant cards && update ui
                //searchText - data/value from input box
                //bind the input box with a local state var
                console.log(searchText);
                //filter out list of rest based on searchText
                const filteredRes = listOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRes(filteredRes);
                // setSearchText("");
              }}
            >
              Search
            </button>
          </div>

          <div>
            <button
              className=" bg-transparent ... font-medium text-black px-4 py-1 m-8 rounded-full  border border-solid border-slate-700"
              onClick={() => {
                //Filter logic to get avgRating filtered out
                const filteredList = listOfRes.filter(
                  (res) => res.info.avgRating > 4
                );

                setlistOfRes(filteredList);
              }}
            >
              Top rated Resturants
            </button>
          </div>

          {/* <button
            className="btn price-list"
            onClick={() => {
              //sort based on price
              const filterPrice = listOfRes.filter(
                (res) => res.data.costForTwo > 150
              );
              console.log(filterPrice);

              setlistOfRes(filterPrice);
            }}
          >
            Price
          </button> */}
        </div>
        <div className="flex flex-wrap">
          {/* resturants card Components */}
          {/* <ResturantCards
              resName="French Loaf"
              cuisine="Cake,pastries"
              rating="4.7"
              deliveryTime={25}
            />
            <ResturantCards
              resName="KFC"
              cuisine="fast food"
              rating="4.5"
              deliveryTime={30}
            /> */}

          {/* best way - map, filter, reduce */}
          {filteredRes.map((res) => (
            <Link to={"/restaurants/" + res.info.id}>
              {/* {if restarurant has aggregatedDiscountinfo  show that with card - higher orderfunc} */}
              <ResturantCards key={res.info.id} resData={res} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
