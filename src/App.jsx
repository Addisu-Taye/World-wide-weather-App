import React, { useState } from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import MapSearch from './components/MapSearch';
import useWeather from './hooks/useWeather';

const App = () => {
  const { weatherData, fetchWeatherByCity, fetchWeatherByCoords } = useWeather();
  const [city, setCity] = useState('');

  const handleSearch = () => {
    fetchWeatherByCity(city);
  };

  const handleMapClick = (latlng) => {
    console.log("Fetching weather for:", latlng); // Debugging log
    fetchWeatherByCoords(latlng.lat, latlng.lng);
  };

  return (
    <div className="App">
      <Header />
      <div className="search-panel">
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData && <WeatherCard weatherData={weatherData} />}
      <MapSearch onMapClick={handleMapClick} />
      <div>Developed by Addisu Taye</div>
    </div>
    
  );
};

export default App;
