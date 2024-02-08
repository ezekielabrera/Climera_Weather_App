import React, { useEffect, useState } from "react";
import "./CurrentWeather.css";
import icon1 from "../../assets/weather_icons/01d.png";
import icon2 from "../../assets/weather_icons/01n.png";
import icon3 from "../../assets/weather_icons/direction.png";
// import Footer from "../footer/Footer";
// import Loading from "../loading/Loading";
// import { fetchData, url } from "../../api";
// import * as module from "../../module";

// import { getAqiText } from "../../module";

const CurrentWeather = ({ selectedCity, weatherDetails }) => {
  const [loading, setLoading] = useState(true);
  const [errorContentVisible, setErrorContentVisible] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  // Assuming you have searchResult available from the previous component
  //  const searchResult = [
  //   {
  //     name: "City Name",
  //     lat: 10.2931062,
  //     lon: 123.9020773,
  //     country: "Country Name",
  //     state: "State Name",
  //   },
  //   // ... other search results
  // ];

  // useEffect(() => {
  //   // Assuming you want to use the first result from searchResult
  //   const { lat, lon } = searchResult[0];

  //   // Check if lat and lon are not null before making the API call
  //   if (lat !== null && lon !== null) {
  //     // Fetch weather data using lat and lon
  //     fetchData(url.currentWeather(lat, lon), (currentWeather) => {
  //       setWeatherData(currentWeather);
  //       setLoading(false);
  //     });
  //   } else {
  //     // Handle the case where lat or lon is null
  //     console.error("Latitude (lat) or Longitude (lon) is null.");
  //     setLoading(false);
  //     setErrorContentVisible(true);
  //   }
  // }, []); // Empty dependency array means it runs once on mount

  // const updateWeather = (lat, lon) => {
  //   // Your logic for updating weather data goes here
  //   console.log("Update weather function started");
  //   // Example:
  //   setLoading(true);

  //   const container = document.querySelector("[data-container]");
  //   const currentLocationBtn = document.querySelector("[data-current-location-btn]");
  //   const errorContent = document.querySelector("[data-error-content]");

  //   loading.style.display = "grid";
  //   container.style.overflowY = "hidden";
  //   container.classList.contains("fade-in");
  //   errorContent.style.display = "none";

  //   const currentWeatherSection = document.querySelector("[data-current-weather]");
  //   const highlightSection = document.querySelector("[data-highlights]");
  //   const hourlySection = document.querySelector("[data-hourly-forecast]");
  //   const forecastSection = document.querySelector("[data-5-day-forecast]");

  //   currentWeatherSection.innerHTML = "";
  //   highlightSection.innerHTML = "";
  //   hourlySection.innerHTML = "";
  //   forecastSection.innerHTML = "";

  //   if (window.location.hash === "#/current-location") {
  //     currentLocationBtn.setAttribute("disabled", "");
  //   } else {
  //     currentLocationBtn.removeAttribute("disabled");
  //   }

  //   fetchData(url.reverseGeo(lat, lon), ([{ name, country }]) => {
  //     console.log("Reverse geolocation data received:", name, country);
  //     const card = document.createElement("div");
  //     card.classList.add("card", "card-lg", "current-weather-card");

  //     if (weatherData) {
  //       console.log("Weather data available:", weatherData);
  //       const {
  //         weather,
  //         dt: dateUnix,
  //         sys: { sunrise: sunriseUnixUTC, sunset: sunsetUnixUTC },
  //         main: { temp, feels_like, pressure, humidity },
  //         visibility,
  //         timezone,
  //       } = weatherData;
  //       const [{ description, icon }] = weather;

  //       card.innerHTML = `
  //         <h2 className="title-2 card-title">Now</h2>

  //         <div className="weapper">
  //           <p className="heading">
  //             ${parseInt(temp)}&deg;<sup>c</sup>
  //           </p>

  //           <img
  //             src="../src/assets/weather_icons/${icon}.png"
  //             alt="${description}"
  //             className="weather-icon"
  //             width="64"
  //             height="64"
  //           />
  //         </div>

  //         <p className="body-3">${description}</p>

  //         <ul className="meta-list">
  //           <li className="meta-item">
  //             <span className="m-icon">calendar_today</span>

  //             <p className="title-3 meta-text">${module.getDate(dateUnix, timezone)}</p>
  //           </li>

  //           <li className="meta-item">
  //             <span className="m-icon">Location_on</span>

  //             <p className="title-3 meta-text" data-location>${name}, ${country}</p>
  //           </li>
  //         </ul>`;

  //       const currentWeatherSection = document.querySelector("[data-current-weather]");
  //       currentWeatherSection.innerHTML = ""; // Clear previous content
  //       currentWeatherSection.appendChild(card);
  //     } else {
  //       // Handle the case when weatherData is not available
  //       console.error("No weather data available");
  //     }

  //     setLoading(false); // Move setLoading inside the callback
  //   });

  //   // Update the state or perform any additional React-specific logic as needed
  //   // setLoading(false);
  // };

  return (
    <>
      {/* Current Weather */}
      <section
        className="section current-weather"
        aria-label="current current"
        data-current-weather
      >
        <div className="card card-lg current-weather-card">
          {selectedCity && weatherDetails && weatherDetails.dt && (
            <>
              <div className="current-location-title">
                <span class="m-icon" style={{margin: "0 5px"}}>location_on</span>{" "}
                <h2 className="title-2 card-title">{selectedCity.name}</h2>
              </div>
              <div className="weapper">
              <img
                  src={
                    weatherDetails &&
                    weatherDetails.weather &&
                    weatherDetails.weather[0] &&
                    `../src/assets/weather_icons/Sun.png`
                  }
                  alt={
                    weatherDetails &&
                    weatherDetails.weather &&
                    weatherDetails.weather[0] &&
                    weatherDetails.weather[0].description
                  }
                  className="weather-icon current-weather-icon"
                  width="64"
                  height="64"
                />
                <p className="heading">
                  {weatherDetails && Math.round(weatherDetails.main.temp)}
                  &deg;<sup>C</sup>
                </p>

                
              </div>
              <p className="body-3">
                {weatherDetails &&
                  weatherDetails.weather &&
                  weatherDetails.weather[0] &&
                  weatherDetails.weather[0].description}
              </p>
              <ul className="meta-list">
                <li className="meta-item">
                  <span className="m-icon">calendar_today</span>
                  <p className="title-3 ">
                    {new Date(
                      (weatherDetails.dt + weatherDetails.timezone) * 1000
                    ).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>
                </li>

                <li className="meta-item">
                  <span className="m-icon">explore</span>
                  <p className="title-3 ">
                    {selectedCity.country}, {selectedCity.state}
                  </p>
                </li>
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default CurrentWeather;
