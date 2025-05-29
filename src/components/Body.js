import Restrorantcard from "./Restrorantcard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { restaurantList } from "../utils/constant";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [imageGridCards, setImageGridCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("Image Grid Cards Data:", json?.data?.cards[0]?.card?.card?.imageGridCards?.info);

    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  };

  if (filteredRestaurants.length === 0 && imageGridCards.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button className="searchbtn" onClick={()=>{
            //filter the restaurants based on search text
            const filteredList = restaurants.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
            }}>search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter(
              (restaurant) => parseFloat(restaurant.info.avgRating) > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Restrorantcard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>

      {/* <div className="image-grid">
        {imageGridCards.map((card) => (
          <div key={card.id} className="image-card">
            <img
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${card.imageId}`}
              alt={card.accessibility?.altText || "Image"}
            />
            <h3>{card.action?.text}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Body;
