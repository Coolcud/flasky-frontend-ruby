import Restaurant from "./Restaurant"
import PropTypes from 'prop-types';

const RestaurantList = ({ data, updateRating, deleteRestaurant}) => {

  const restaurantComponents = data.map((restaurant) => {
    return (
      <Restaurant
        key={restaurant.id}
        id={restaurant.id}
        name={restaurant.name}
        cuisine={restaurant.cuisine}
        rating={restaurant.rating}
        distance={restaurant.distance}
        updateRating={updateRating}
        deleteRestaurant={deleteRestaurant}
      />
    );
  });

  return (
    <div>
      <h1>Restaurant List</h1>
      {restaurantComponents}
    </div>
  )
};

RestaurantList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    distance: PropTypes.string.isRequired
  })).isRequired,
  updateRating: PropTypes.func.isRequired
};

export default RestaurantList;