import React from 'react';
import { motion } from 'framer-motion';
import './Forecast.css'; 
import './WeatherOverview.css';


const Forecast = ({ data = { list: [] } }) => {
  const dailyData = data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));

  return (
    <motion.div 
      className="weather-overview-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-cards">
        {dailyData.map((day, index) => (
          <div key={index} className="forecast-card">
            <h4>{new Date(day.dt_txt).toLocaleDateString()}</h4>
            <p><strong>Temp:</strong> {day.main.temp} °C</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Forecast;
