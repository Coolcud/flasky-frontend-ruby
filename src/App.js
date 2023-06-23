import './App.css';
import RestaurantList from './components/RestaurantList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewRestaurantForm from './components/NewRestaurantForm';


function App() {
  const [restaurants, setRestaurants] = useState([]);
  const API = "https://nancy-harris-ruby-restaurant-flasky.onrender.com/restaurant";

  const getRestaurants = () => {
    axios.get(API)
      .then((result) => {
        setRestaurants(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const postRestaurant = (newRestaurantData) => {
    axios.post(API, newRestaurantData)
      .then(() => {
        getRestaurants();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // changeRating that updates state via API call
  const changeRating = (id, originalRating, direction) => {
    const newRating = direction === "up" ? originalRating + 1 : originalRating - 1;

    axios.patch(`${API}/${id}/rating`, { value: newRating })
      .then((result) => {
        console.log(result.data);
        getRestaurants();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRestaurant = (id) => {
    axios.delete(`${API}/${id}`)
      .then((result) => {
        console.log(result.data);
        setRestaurants(restaurants => {
          return restaurants.filter(rest => rest.id !== id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='App'>
      <RestaurantList
        restaurantData={restaurants}
        updateRating={changeRating}
        deleteRestaurant={deleteRestaurant}
      />
      <NewRestaurantForm
        addRestaurant={postRestaurant}
      />
    </div>
  );
}

export default App;


/*
RESTAURANT DATA BEFORE AXIOS

const restaurantData = [
  {id: 1, name: "Salty's", cuisine: "Seafood", rating: 4, distance: "5 miles"},
  {id: 2, name: "Toulouse", cuisine: "Creole", rating: 2, distance: "2 miles"},
  {id: 3, name: "Tanoor", cuisine: "Arab", rating: 4, distance: "2.5 miles"},
  {id: 4, name: "Meet", cuisine: "Korean BBQ", rating: 5, distance: "1 mile"}
];

OTHER WAY TO CHANGE RATING

  // changeRating that updates state manually
  // const changeRating = (id, originalRating, direction) => {
  //   const newRating = direction === "up" ? originalRating + 1 : originalRating - 1;

  //   axios.patch(`${API}/${id}/rating`, { value: newRating })
  //     .then((result) => {
  //       console.log(result.data);
  //       const newRestaurants = restaurants.map((restaurant) => {
  //         if (restaurant.id === id) {
  //           const updatedRestaurant = { ...restaurant, rating: newRating };
  //           return updatedRestaurant;
  //         }
  //         return { ...restaurant };
  //       });
  //       setRestaurants(newRestaurants);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

OTHER WAYS TO DELETE RESTAURANT

    setRestaurants(restaurants => {
      return restaurants.filter(rest => rest.id !== id);
    });

    const newRestaurants = restaurants.filter(
      (restaurant) => restaurant.id !== id
    );
    setRestaurants(newRestaurants);

    const newRestaurants = [];
    for (let restaurant of restaurants) {
      if (restaurant.id !== id) {
        newRestaurants.push(restaurant);
      }
    }
    setRestaurants(newRestaurants);
*/