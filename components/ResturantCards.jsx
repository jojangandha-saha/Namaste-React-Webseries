import { CDN_URL } from "../utils/constants";
const ResturantCards = function (props) {
  //   console.log(props);
  const { resData } = props;
  //with optional chain
  const { sla, cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="card-img"
      />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>

        <span className="rating-time">
          <h5>Rating : {avgRating}</h5>
          <h5>Delivery time : {sla.deliveryTime} mins</h5>
        </span>

        <h5>₹{costForTwo / 100} FOR TWO</h5>

        <p>{cuisines.join(",")}</p>
      </div>
    </div>
  );
};

export default ResturantCards;
