import React, { useState } from "react";
import Header from "./components/header/header";
import CurrentWeather from "./components/weather/CurrentWeather";
import Forecast from "./components/weather/Forecast";
// import Article from './components/article/Article';
// import NotFound from './components/404 error/NotFound';
// import { fetchWeatherDetails } from './api.js';
// import * as module from "./module.js";
import "./App.css";
import Highlights from "./components/weather/Highlights";
import Hourly from "./components/weather/Hourly";
import ForecastWidget from "./components/weather/ForecastWidget";

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [airPollution, setAirPollution] = useState(null);

  const handleCitySelect = (city, details, forecast, airPollution) => {
    // Update state with selected city, weather details, and forecast data
    setSelectedCity(city);
    setWeatherDetails(details);
    setForecastData(forecast);
    setAirPollution(airPollution);
  };

  return (
    <>
      <Header onCitySelect={handleCitySelect} />
      <main>
        <article className="container" data-container>
          <div className="content-left">
            <CurrentWeather
              selectedCity={selectedCity}
              weatherDetails={weatherDetails}
            />
            <Forecast selectedCity={selectedCity} forecastData={forecastData} />
            {/* <ForecastWidget /> */}
          </div>
          <div className="content-right">
            <Highlights selectedCity={selectedCity} weatherDetails={weatherDetails} forecastData={forecastData} airPollutionData={airPollution}/>
            <Hourly selectedCity={selectedCity} forecastData={forecastData}/>
          </div>
        </article>
      </main>
      {/* <Article selectedCity={selectedCity} weatherDetails={weatherDetails} forecastData={forecastData} airPollutionData={airPollution}/> */}
      {/* 404 Section */}
      {/* <NotFound /> */}
    </>
  );
};

export default App;
