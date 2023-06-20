import './Restaurant.css';
import PropTypes from 'prop-types';
import React from 'react';

const Restaurant = ({ id, name, cuisine, rating, distance, updateRating, deleteRestaurant}) => {
  const determineColor = () => {
    if (rating > 5) {
      return 'high-rating';
    } else if (rating > 3) {
      return 'rating';
    } else {
      return 'low-rating';
    }
  }

  return (
    <div>
      <h2 className="restaurant-title">{name}</h2>
      <ul>
        <li>Cuisine: {cuisine}</li>
        <li className={determineColor()}>Rating: {rating}</li>
        <button onClick={() => updateRating(id, rating, 'up')}>Upvote</button>
        <button onClick={() => updateRating(id, rating, 'down')}>Downvote</button>
        <button onClick={() => deleteRestaurant(id)}>Delete</button>
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
  distance: PropTypes.string.isRequired,
  updateRating: PropTypes.func.isRequired,
  deleteRestaurant: PropTypes.func.isRequired
};

export default Restaurant