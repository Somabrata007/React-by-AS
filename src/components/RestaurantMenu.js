import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  
  const restaurant = useRestaurant(id);

  if (!restaurant) {
    return <Shimmer />;
  }

  const { name, cloudinaryImageId, areaName, city, avgRating, costForTwoMessage } = 
    restaurant?.cards[2]?.card?.card?.info || {};

  const menuItems1 = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
  const menuItems2 = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{name}</h2>
        {cloudinaryImageId && <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />}
        <h3>{areaName}</h3>
        <h3>{city}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {menuItems1.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
          {menuItems2.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;