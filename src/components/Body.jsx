import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../data";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (onlineStatus) {
      fetchData();
    }
  }, [onlineStatus]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0225&lng=72.5714&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const ShowFilteredData = () => {
    const updatedList = restaurantData.filter(
      (restaurant) => restaurant.info?.avgRatingString > 4
    );
    setListOfRestaurants(updatedList);
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

  if (!onlineStatus) {
    return <h1>You are offline!! Check your connection</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={ShowFilteredData}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
          <Link
            key={index}
            style={{ textDecoration: "none", color: "black" }}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard
              key={restaurant?.info?.id}
              restaurantData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
