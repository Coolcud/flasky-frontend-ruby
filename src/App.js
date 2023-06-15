import './App.css';
import RestaurantList from './components/RestaurantList';

function App() {
  const data = [
    {id: 1, name: "Salty's", cuisine: "Seafood", rating: 4, distance: "5 miles"},
    {id: 2, name: "Toulouse", cuisine: "Creole", rating: 2, distance: "2 miles"},
    {id: 3, name: "Tanoor", cuisine: "Arab", rating: 4, distance: "2.5 miles"},
    {id: 4, name: "Meet", cuisine: "Korean BBQ", rating: 5, distance: "1 mile"}
  ];

  return (
    <div className='App'>
      <RestaurantList data={data}/>
    </div>
  );
}

export default App;
