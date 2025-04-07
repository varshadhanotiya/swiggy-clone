import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    setListOfRestaurents(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

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
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants to display</p>
        )}
      </div>
    </div>
  );
};

export default Body;
