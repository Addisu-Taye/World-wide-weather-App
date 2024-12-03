import { useState } from 'react';
import axios from 'axios';

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherByCity = async (city) => {
    try {
      const apiKey = '782dcff4ef8290b62d40ffe399f1e120Y'; // Replace with your OpenWeather API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data by city:", error);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const apiKey = '782dcff4ef8290b62d40ffe399f1e120'; // Replace with your OpenWeather API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data by coordinates:", error);
    }
  };

  return { weatherData, fetchWeatherByCity, fetchWeatherByCoords };
};

export default useWeather;
