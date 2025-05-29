import { RESTRORANT_LOGO_URL } from "../utils/constant.js";
import { Link } from "react-router-dom";

const Restrorantcard = ({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla,
}) => {
  return (
    <Link to={`/restaurant/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="res-card">
        <img
          className="res-logo"
          src={
            cloudinaryImageId
              ? `${RESTRORANT_LOGO_URL}/${cloudinaryImageId}`
              : "https://via.placeholder.com/150?text=Image+Not+Available"
          }
          alt={name}
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>Rating: {avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery Time: {sla?.slaString}</h4>
      </div>
    </Link>
  );
};

export default Restrorantcard;