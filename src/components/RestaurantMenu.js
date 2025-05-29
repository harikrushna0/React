import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
      try {
        const data = await fetch(url);
        if (!data.ok) throw new Error("Failed to fetch menu");
        const json = await data.json();
        setMenu(json);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMenu();
  }, [id]);

  if (error) return <div className="restro-menu-error">Error: {error}</div>;
  if (!menu) return <div className="restro-menu-loading">Loading...</div>;

  // Extract restaurant info from the API response
  const info = menu?.data?.cards?.[2]?.card?.card?.info;

  return (
    <div className="restro-menu-container">
      {info ? (
        <div className="restro-menu-card">
          <img
            className="restro-menu-img"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${info.cloudinaryImageId}`}
            alt={info.name}
          />
          <div className="restro-menu-details">
            <h1 className="restro-menu-title">{info.name}</h1>
            <p className="restro-menu-address">{info.locality}, {info.areaName}</p>
            <p className="restro-menu-cuisines">{info.cuisines?.join(", ")}</p>
            <div className="restro-menu-stats">
              <span className="restro-menu-rating">⭐ {info.avgRating}</span>
              <span className="restro-menu-cost">{info.costForTwoMessage}</span>
              <span className="restro-menu-delivery">{info.sla?.slaString}</span>
            </div>
            <p className="restro-menu-totalratings">{info.totalRatingsString}</p>
            <p className="restro-menu-open">{info.availability?.opened ? "Open Now" : "Closed"}</p>
          </div>
        </div>
      ) : (
        <p>Restaurant details not found.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;