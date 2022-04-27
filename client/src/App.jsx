import React from 'react';
import Header from './components/Header'
import NavBar from './components/NavBar'
import './App.css';
import data from './data/db';
import FavoriteIconDeactivated from './img/favorite_icon_deactivated.svg'


function App() {
  console.log(data);

  return (
    <div className="App">
      <Header />
      <ul className="Ulist">
        {data.map(station => (
          <li className="ListItems" key={station.uuid}>
            {station.e5} {station.name.length > 14 ?
  `${station.name.substring(0, 14)}...` : station.name} {station.street} {station.post_code} {station.city}
            <img src={FavoriteIconDeactivated} alt="Favorite icon deactivated" />
          </li>
        ))}
      </ul>
      <NavBar />
    </div>
  );
}

export default App;
