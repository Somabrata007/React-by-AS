import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="w-xs h-80 p-2 m-5 shadow-lg bg-green-100">
      <img className="w-full h-48 object-cover object-center rounded-xl" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating ?? "3"} stars</h4>
    </div>
  );
};

export default RestaurantCard;
