import React from 'react';
import { motion } from 'framer-motion';
import { FaTemperatureHigh, FaCloudSun, FaTachometerAlt, FaWind } from 'react-icons/fa';
import './WeatherOverview.css';

const WeatherOverview = ({ data = { list: [] } }) => {
  const weather = data.list[0];

  return (
    <motion.div 
      className="weather-overview-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Current Weather in {data.city.name}</h2>
      <div className="weather-details">
        <div className="weather-box temperature-box">
          <FaTemperatureHigh className="weather-icon-small" />
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
        </div>
        <div className="weather-box weather-box-icon">
          <FaCloudSun className="weather-icon-small" />
          <p><strong>Weather:</strong> {weather.weather[0].description}</p>
        </div>
        <div className="weather-box humidity-box">
          <FaTachometerAlt className="weather-icon-small" />
          <p><strong>Humidity:</strong> {weather.main.humidity} %</p>
        </div>
        <div className="weather-box wind-box">
          <FaWind className="weather-icon-small" />
          <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherOverview;
