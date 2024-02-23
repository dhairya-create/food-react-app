import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../data";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
   
      fetchData();
  
  }, []);

  const fetchData = async () => {
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
        {filteredRestaurant.map((restaurant) => (
          <Link style={{textDecoration:"none",color:"black"}} to={'/restaurants/'+restaurant?.info?.id}>
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
