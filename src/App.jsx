import React, { useState } from "react";
import Header from "./components/header/header";
import CurrentWeather from "./components/weather/CurrentWeather";
import Forecast from "./components/weather/HourlyForecast";
import { fetchWeatherDetails } from './utils/api';
import "./App.css";
import Highlights from "./components/weather/Highlights";
import Hourly from "./components/weather/WeekForecast";
import LandingPage from './components/landingPage/landing';
import HourlyForecast from "./components/weather/HourlyForecast";
import WeekForecast from "./components/weather/WeekForecast";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [airPollution, setAirPollution] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true); // State to control the visibility of the landing page

  const handleCitySelect = (city, details, forecast, airPollution) => {
    // Update state with selected city, weather details, and forecast data
    setLoading(true); // Set loading state to true when fetching data
    setSelectedCity(city);
    setWeatherDetails(details);
    setForecastData(forecast);
    setAirPollution(airPollution);
    setShowLandingPage(false); // Hide landing page when a city is selected

    fetchWeatherDetails(city.lat, city.lon, ({ weatherDetails, forecastData, airPollutionData }) => {
      // Update state with weather details, forecast data, and air pollution data
      setWeatherDetails(weatherDetails);
      setForecastData(forecastData);
      setAirPollution(airPollutionData);
      setLoading(false); // Set loading state to false when data is fetched
    });
  };
  
  return (
    <>
      <Header onCitySelect={handleCitySelect} />
      <main>
        <div className={`${loading ? 'loading' : ''}  `} ></div>
        {showLandingPage && ( // Render landing page only if showLandingPage is true
          <div className="landing-page">
            <LandingPage />
          </div>
        )}
        <article className={`container ${showLandingPage ? 'hidden' : ''}`} data-container> {/* Add 'hidden' class to hide container when showLandingPage is true */}
          <div className="content-left">
            <CurrentWeather
              selectedCity={selectedCity}
              weatherDetails={weatherDetails}
            />
            <HourlyForecast selectedCity={selectedCity} forecastData={forecastData} />
          </div>
          <div className="content-right">
            <Highlights
              selectedCity={selectedCity}
              weatherDetails={weatherDetails}
              forecastData={forecastData}
              airPollutionData={airPollution}
            />
            <WeekForecast selectedCity={selectedCity} forecastData={forecastData} />
          </div>
        </article>
      </main>
    </>
  );
};

export default App;
