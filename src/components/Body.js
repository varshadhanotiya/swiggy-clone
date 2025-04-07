import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  const filterTopRated = () => {
    const filteredList = listOfRestaurents.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setListOfRestaurents(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.length > 0 ? (
          listOfRestaurents.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          ))
        ) : (
          <p>No restaurants to display</p>
        )}
      </div>
    </div>
  );
};

export default Body;
