import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null)
  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
   console.log(json.data);
    setResInfo(json.data)
  };

  return resInfo
};

export default useRestaurantMenu;
