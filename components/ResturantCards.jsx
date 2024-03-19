import { CDN_URL } from "../utils/constants";
const ResturantCards = function (props) {
  //   console.log(props);
  const { resData } = props;
  //with optional chain
  const { sla, cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px]  rounded-lg hover:bg-slate-50  hover:scale-105 transition-transform duration-300">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="card-img"
      />
      <div className="">
        <h3 className="font-bold py-4 text-lg">{name}</h3>

        <span className="rating-time">
          <h5>Rating : {avgRating}</h5>
          <h5>Delivery time : {sla.deliveryTime} mins</h5>
        </span>

        <h5>{costForTwo}</h5>

        <p className="overflow-hidden whitespace-nowrap">
          {cuisines.join(",")}
        </p>
      </div>
    </div>
  );
};

//higher order component -> take resCard as input and return an enhanced version of
//res card which has aggregatedDiscountInfoV3
/**
 * input as rescard => output rescardAggregated
 
 */

// export const resCardAgg = (ResturantCards) => {
//   return () => {
//     return (
//       <>
//         <label>
//           <p>{aggegatedDiscountInfoV3.header}</p>
//           <p>{aggegatedDiscountInfoV3.subHeader}</p>
//         </label>
//         <ResturantCards />
//       </>
//     );
//   };
// };
export default ResturantCards;
