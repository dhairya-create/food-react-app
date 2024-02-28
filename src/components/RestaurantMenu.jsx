import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex,setShowIndex] = useState(null)
  //Custom Hook
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

   

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

   
    console.log(resInfo?.cards[2]?.card?.card?.info?.isVeg);
  return (
    <div className="res-menu-container bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">{name}</h1>
      <h3 className="text-lg text-gray-600 mb-2 text-center">
        {cuisines.join(" ")}
      </h3>
      <h3 className="text-lg text-gray-600 mb-2 text-center">
        {costForTwoMessage}
      </h3>

      {/* //Accordian Item */}
      {categories.map((category,index) => {
        return <RestaurantCategory key={category?.card?.card?.title} 
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
          />;
      })}
    </div>
  );
};

export default RestaurantMenu;
