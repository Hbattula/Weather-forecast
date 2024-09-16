<h1> WEATHER FORECAST APP </h1>

<h3>Deployment</h3>

The Weather Dashboard App is hosted on GitHub Pages. You can access the live version of the app at:
https://hbattula.github.io/Weather-forecast/


<h2>Weather Dashboard App
Overview</h2>

<h4>The Weather Dashboard App provides users with a comprehensive view of current weather conditions, temperature trends, humidity, wind speed, and a 5-day weather forecast. Built with React, this app leverages various components and visualizations to present weather data in an intuitive and engaging way.
Dependencies</h4>
The app uses the following dependencies:
•	React: A JavaScript library for building user interfaces.
•	Axios: A promise-based HTTP client for making API requests.
•	Recharts: A charting library for creating charts and visualizations.
•	Framer Motion: A library for animations and transitions in React.
•	D3.js: A JavaScript library for producing dynamic, interactive data visualizations in web browsers. 
•	Chart.js: A JavaScript library for creating flexible and interactive charts.

 

 

<h2>Features</h2>
•	Current Weather Overview: Displays the current temperature, weather description, humidity, and wind speed for a specified location.
•	Temperature Trends: Shows a line chart of temperature changes over time.
•	Humidity and Wind Speed: Provides bar charts for visualizing humidity and wind speed.
•	5-Day Forecast: Lists the weather forecast for the next five days, showing temperature and weather description.

<h2>Components</h2>
•	App: The main component that fetches weather data from the OpenWeatherMap API and renders child components.
•	WeatherOverview: Displays current weather details including temperature, weather description, humidity, and wind speed.
•	TemperatureChart: Visualizes temperature trends over a specified time period using a line chart.
•	HumidityWindChart: Shows bar charts for humidity and wind speed.
•	Forecast: Provides a 5-day weather forecast with temperature and weather descriptions.

<h2>API Integration</h2>
The app fetches weather data from the OpenWeatherMap API. The endpoint used is:
https://api.openweathermap.org/data/2.5/forecast?q=London&appid=API_KEYunits=metric

<h2>Styling</h2>
The app uses a combination of CSS and inline styles to provide a modern, visually appealing design. Key styling features include:
•	Background Gradient: A subtle gradient background for the main container.
•	Card Styles: Enhanced card styles with shadows, borders, and gradient backgrounds.
•	Title Styles: A bold, modern font with color and text shadow for the main title.


<h2>Setup and Installation</h2>
1.	Clone the Repository:
•	git clone https://github.com/xyz/weather-dashboard.git
2.	Navigate to the Project Directory:
•	cd weather-dashboard
3.	Install Dependencies:
•	npm install
4.	Start the Development Server:
•	npm start
5.	Open Your Browser: Visit http://localhost:3000 to view the app.
