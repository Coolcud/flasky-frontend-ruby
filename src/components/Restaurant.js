import './Restaurant.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Restaurant = ({ id, name, cuisine, rating, distance }) => {
  const [updateRating, setRating] = useState(rating);

  const changeRating = (direction) => {
    if (direction === 'up') {
      setRating(updateRating + 1);
    } else if (direction === 'down') {
      setRating(updateRating - 1);
    }
  };

  const determineColor = () => {
    if (updateRating > 5) {
      return 'high-rating';
    } else if (updateRating > 3) {
      return 'rating';
    } else {
      return 'low-rating';
    }
  }

  return (
    <div>
      <h2 className="restaurant-title">{name}</h2>
      <ul>
        <li>ID: {id}</li>
        <li>Cuisine: {cuisine}</li>
        <li className={determineColor()}>Rating: {updateRating}</li>
        <button onClick={() => changeRating('up')}>Upvote</button>
        <button onClick={() => changeRating('down')}>Downvote</button>
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