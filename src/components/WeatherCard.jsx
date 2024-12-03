import React from 'react';
import { useIntl } from 'react-intl';

const WeatherCard = ({ weatherData }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="weather-card">
      <h2>{weatherData.city.name}</h2>
      <h3>{formatMessage({ id: 'forecast' })}</h3>
      <div className="forecast">
        {weatherData.list.map((entry, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(entry.dt_txt).toLocaleString()}</p>
            <p>{entry.weather[0].description}</p>
            <p>{entry.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
