import React from "react";
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  return (
    <div className="m-4 p-5 w-64 h-[500px] bg-gray-400 rounded-lg transform transition-transform duration-300 hover:scale-105 ">
      <img
        alt="res-logo"
        className="rounded-lg w-60 h-60"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantData?.info?.cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{restaurantData?.info?.name}</h3>
      <h4>{restaurantData?.info?.cuisines.join(" ")}</h4>
      <h4>{restaurantData?.info?.avgRatingString} ⭐</h4>
      <h4>{restaurantData?.info?.costForTwo}</h4>
      <h4>{restaurantData?.info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};


//Higher Order Component
//input - RestaurantCard -> RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white  z-10 rounded-lg ml-4  p-2">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
