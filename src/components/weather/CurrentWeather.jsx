import React, { useEffect, useRef, useState } from "react";
import "./CurrentWeather.css";
import icon1 from "../../assets/weather_icons/01d.png";
import icon2 from "../../assets/weather_icons/01n.png";
import icon3 from "../../assets/figma_weather_icons/50d.png";

const CurrentWeather = ({ selectedCity, weatherDetails, forecastData }) => {
  const observerRef = useRef(null); // Use a ref to store the observer instance

  useEffect(() => {
    // Create the IntersectionObserver only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-animation");
          } else {
            entry.target.classList.remove("show-animation");
          }
        });
      });
    }

    const hiddenElements = document.querySelectorAll(".hidden-animation");
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    // Clean up the observer when the component is unmounted
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [selectedCity, weatherDetails]); // Update the effect when selectedCity or weatherDetails change

  // For Population Converter
  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  }

  const population = forecastData?.city?.population || 0; // Use optional chaining and provide a default value
  const formattedPopulation = formatNumber(population);

  return (
    <>
      {/* Current Weather */}
      <section className="section current-weather">
        {selectedCity && weatherDetails && weatherDetails.dt && (
          <>
            <div className="card card-lg current-weather-card hidden-animation">
              <div className="current-location-title">
                <div className="current-location-box">
                  <span className="m-icon" style={{ margin: "0 5px" }}>
                    location_on
                  </span>{" "}
                  <h2
                    className="title-2 card-title"
                    title={`Full City Name: ${selectedCity.name}\nCountry: ${selectedCity.country}\nState: ${selectedCity.state}`}
                  >
                    {selectedCity.name && selectedCity.name.length > 9
                      ? selectedCity.name.slice(0, 9) + "..."
                      : selectedCity.name}
                  </h2>
                </div>
                <div>
                  <p className="current-location-date">
                    {new Date(
                      (weatherDetails.dt + weatherDetails.timezone) * 1000
                    ).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>{" "}
                  /{" "}
                  <p className="current-location-time">
                    {new Date(
                      (weatherDetails.dt + weatherDetails.timezone) * 1000
                    ).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>
                </div>
              </div>
              <div className="weapper">
                <img
                  src={
                    weatherDetails &&
                    weatherDetails.weather &&
                    weatherDetails.weather[0] &&
                    `../src/assets/figma_weather_icons/${weatherDetails.weather[0].icon}.png`
                  }
                  alt={
                    weatherDetails &&
                    weatherDetails.weather &&
                    weatherDetails.weather[0] &&
                    weatherDetails.weather[0].description
                  }
                  className="weather-icon current-weather-icon"
                  width="94"
                  height="94"
                />

                <p className="heading">
                  {weatherDetails && Math.round(weatherDetails.main.temp)}
                  &deg;<sup>C</sup>
                  <p className="heading-desc">
                    {weatherDetails &&
                      weatherDetails.weather &&
                      weatherDetails.weather[0] &&
                      weatherDetails.weather[0].description}
                  </p>
                </p>
              </div>

              <ul className="meta-list">
                {/* <li className="meta-item">
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
                </li> */}

                {/* <li className="meta-item">
                  <span className="m-icon">explore</span>
                  <p className="title-3 ">
                    {selectedCity.country}, {selectedCity.state}
                  </p>
                </li> */}
                <div className="meta-value">
                  <span
                    className="m-icon wind-direction"
                    title="Wind Direction"
                    style={{
                      transform: `rotate(${
                        (weatherDetails.wind && weatherDetails.wind.deg) + 135
                      }deg)`,
                      fontSize: "40px",
                    }}
                  >
                    near_me
                  </span>
                  <p>
                    {weatherDetails.wind &&
                      weatherDetails.wind.speed.toPrecision(2)}{" "}
                    m/s
                  </p>
                </div>
                <div className="meta-value">
                  <span
                    class="m-icon"
                    title="Cloud Cover Percentage"
                    style={{ fontSize: "40px" }}
                  >
                    filter_drama
                  </span>
                  <p>
                    {weatherDetails &&
                      weatherDetails.clouds &&
                      weatherDetails.clouds.all}
                    %
                  </p>
                </div>
                <div className="meta-value">
                  <span
                    class="m-icon"
                    title="Population"
                    style={{ fontSize: "40px" }}
                  >
                    diversity_3
                  </span>
                  <p>{formattedPopulation}</p>
                </div>
              </ul>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CurrentWeather;
