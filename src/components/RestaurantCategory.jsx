import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
 

  function handeClick() {
   setShowIndex();
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-5 bg-gray-100 shadow-lg p-4  cursor-pointer">
        <div className="flex justify-between" onClick={handeClick}>
          <h1 className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </h1>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
