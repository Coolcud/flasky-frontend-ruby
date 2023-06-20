import './App.css';
import RestaurantList from './components/RestaurantList';
import { useState } from 'react';

const restaurantData = [
  {id: 1, name: "Salty's", cuisine: "Seafood", rating: 4, distance: "5 miles"},
  {id: 2, name: "Toulouse", cuisine: "Creole", rating: 2, distance: "2 miles"},
  {id: 3, name: "Tanoor", cuisine: "Arab", rating: 4, distance: "2.5 miles"},
  {id: 4, name: "Meet", cuisine: "Korean BBQ", rating: 5, distance: "1 mile"}
];

function App() {
  const [restaurants, setRestaurants] = useState(restaurantData);

  const changeRating = (id, originalRating, direction) => {
    const newRestaurants = restaurants.map((restaurant) => {
      if (restaurant.id === id) {
        const updatedRestaurant = {...restaurant};
        if (direction === 'up') {
          updatedRestaurant.rating = originalRating + 1;
        } else if (direction === 'down') {
          updatedRestaurant.rating = originalRating - 1;
        }
        return updatedRestaurant;
      } else {
        return {...restaurant};
      }
    });

    setRestaurants(newRestaurants);
  };

  const deleteRestaurant = (id) => {
    setRestaurants(restaurants => {
      return restaurants.filter(rest => rest.id !== id);
    });

    // const newRestaurants = restaurants.filter(
    //   (restaurant) => restaurant.id !== id
    // );
    // setRestaurants(newRestaurants);

    // const newRestaurants = [];
    // for (let restaurant of restaurants) {
    //   if (restaurant.id !== id) {
    //     newRestaurants.push(restaurant);
    //   }
    // }
    // setRestaurants(newRestaurants);
  };

  return (
    <div className='App'>
      <RestaurantList
        restaurantData={restaurants}
        updateRating={changeRating}
        deleteRestaurant={deleteRestaurant}
      />
    </div>
  );
}

export default App;
