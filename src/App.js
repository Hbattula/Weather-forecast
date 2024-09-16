import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherOverview from './components/WeatherOverview';
import TemperatureChart from './components/TemperatureChart';
import HumidityWindChart from './components/HumidityWindChart';
import Forecast from './components/Forecast';
import './App.css';
function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=533683b6ceb4e26df2c3f57046d056bc&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };
    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1 className="main-title">Weather Forecast</h1>
      <div className="container">
        <WeatherOverview data={weatherData} />
        <TemperatureChart data={weatherData} />
        <HumidityWindChart data={weatherData} />
        <Forecast data={weatherData} />
      </div>
    </div>
  );
}

export default App;
