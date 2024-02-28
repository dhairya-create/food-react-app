import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //Custom Hook
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="res-menu-container bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">{name}</h1>
      <h3 className="text-lg text-gray-600 mb-2 text-center">{cuisines.join(" ")}</h3>
      <h3 className="text-lg text-gray-600 mb-4 text-center">{costForTwoMessage}</h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {itemCards.map((item) => (
          <li key={item.card.info.name} className="bg-white p-4 rounded-lg shadow">
            <p className="text-xl font-semibold">{item.card.info.name}</p>
            <p className="text-gray-600">
              Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
