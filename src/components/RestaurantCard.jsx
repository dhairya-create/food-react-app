import React from "react";
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantData?.info?.cloudinaryImageId}`}
      />
      <h3>{restaurantData?.info?.name}</h3>
      <h4>{restaurantData?.info?.cuisines.join(" ")}</h4>
      <h4>{restaurantData?.info?.avgRatingString} ⭐</h4>
      <h4>{restaurantData?.info?.costForTwo}</h4>
      <h4>{restaurantData?.info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
