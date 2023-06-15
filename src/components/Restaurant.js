import "./Restaurant.css";
import PropTypes from 'prop-types';

const Restaurant = ({ id, name, cuisine, rating, distance }) => {
  return (
    <div>
      <h1 className="restaurant-title">{name}</h1>
      <ul>
        <li>Cuisine: {cuisine}</li>
        <li>Rating: {rating}</li>
        <li>Distance from Ada: {distance}</li>
      </ul>
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  distance: PropTypes.string.isRequired
};

export default Restaurant