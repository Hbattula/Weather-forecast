import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import './WeatherOverview.css';
import './Forecast.css';

const TemperatureChart = ({ data = { list: [] } }) => {
  const chartData = data.list.slice(0, 8).map((item) => ({
    time: new Date(item.dt_txt).toLocaleTimeString(),
    temperature: item.main.temp,
  }));

  return (
    <motion.div 
      className="weather-overview-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="forecast-title">Temperature Trends</h3>
      <div className="chart-container">
        <LineChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 12, fontFamily: 'Arial, sans-serif' }} />
          <YAxis tick={{ fontSize: 12, fontFamily: 'Arial, sans-serif' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </div>
    </motion.div>
  );
};

export default TemperatureChart;
