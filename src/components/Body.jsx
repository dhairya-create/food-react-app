import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { restaurantData } from "../data";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    if (onlineStatus) {
      fetchData();
    }
  }, [onlineStatus]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      setListOfRestaurants(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    if (searchValue.trim() === "") {
      alert("Please enter a search term.");
      return;
    }

    const filteredRestaurantResult = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredRestaurant(filteredRestaurantResult);
  };

  const handleFilteredData = () => {
    const updatedList = restaurantData.filter(
      (restaurant) => restaurant.info?.avgRatingString > 4
    );
    setListOfRestaurants(updatedList);
  };

  if (!onlineStatus) {
    return <h1 className="text-center mt-8">You are offline!! Check your connection</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body mx-auto max-w-screen-lg">
      <div className="filter flex justify-between items-center m-4 p-4 bg-gray-100 rounded-lg">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
            placeholder="Search restaurants..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="ml-4 px-4 py-2 bg-green-400 text-white rounded-lg focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="ml-4 px-4 py-2 bg-gray-400 text-white rounded-lg focus:outline-none"
          onClick={handleFilteredData}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRestaurant.map((restaurant, index) => (
          <Link
            key={index}
            to={"/restaurants/" + restaurant?.info?.id}
            className="text-black"
          >
            {index % 2 === 0 ? (
              <RestaurantCardPromoted  restaurantData={restaurant} />
            ) : (
              <RestaurantCard
                key={restaurant?.info?.id}
                restaurantData={restaurant}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
