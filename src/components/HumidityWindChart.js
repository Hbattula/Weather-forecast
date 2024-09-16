import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import './HumidityWindChart.css';
import './WeatherOverview.css';
import './Forecast.css';

const HumidityWindChart = ({ data = { list: [] } }) => {
  const chartData = data.list.slice(0, 8).map((item) => ({
    time: new Date(item.dt_txt).toLocaleTimeString(),
    humidity: item.main.humidity,
    windSpeed: item.wind.speed,
  }));

  return (
    <motion.div 
      className="weather-overview-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="forecast-title">Humidity and Wind Speed</h3>
      <div className="chart-container">
        <BarChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="humidity" fill="#8884d8" />
          <Bar dataKey="windSpeed" fill="#82ca9d" />
        </BarChart>
      </div>
    </motion.div>
  );
};

export default HumidityWindChart;
