import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item))

  }



  return (
    <div>
      <div className=" cursor-pointer">
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2  border-gray-200 border-b-2 "
          >
            <div className="flex justify-between items-center ">
              <div className="flex items-center">
                <span className="font-bold mx-1">
                  {item.card.info.name + " "}{" "}
                </span>
                <div className="font-bold">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </div>
              </div>

              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-1 mx-0 rounded-lg bg-black opacity-75 text-white"
                  onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>

                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    item?.card?.info?.imageId
                  }
                  alt="res-logo"
                  className="w-30 mb-2"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {item.card.info.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
