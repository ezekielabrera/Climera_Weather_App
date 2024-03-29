import React, { useEffect, useRef } from "react";
import "./HourlyForecast.css";

const HourlyForecast = ({ selectData, forecastData }) => {
  const observerRef = useRef(null); // Use a ref to store the observer instance

  useEffect(() => {
    // Create the IntersectionObserver only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hourly-show-animation");
          } else {
            entry.target.classList.remove("hourly-show-animation");
          }
        });
      });
    }

    const hiddenElements = document.querySelectorAll(
      ".hourly-hidden-animation"
    );
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    // Clean up the observer when the component is unmounted
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [forecastData]); // Update the effect when selectedCity or weatherDetails change

  return (
    <section
      className="section forecast"
      aria-labelledby="forecast-label"
      data-5-day-forecast
    >
      {forecastData &&
        forecastData.list &&
        forecastData.list[0] &&
        forecastData.list[0].dt && (
          <>
            <h2 className="title-2" id="forecast-label">
              Hourly Forecast
            </h2>

            <div className="card card-lg forecast-card hourly-hidden-animation">
              <ul>
                {/* 2nd Day / Tomorrow */}
                <li className="card-item">
                  <div className="icon-wrapper">
                    <img
                      src={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[1] &&
                        forecastData.list[1].weather &&
                        forecastData.list[1].weather[0] &&
                        `../src/assets/figma_weather_icons/${forecastData.list[1].weather[0].icon}.png`
                      }
                      alt={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[1] &&
                        forecastData.list[1].weather &&
                        forecastData.list[1].weather[0] &&
                        forecastData.list[1].weather[0].description
                      }
                      width="36"
                      height="36"
                      className="weather-icon"
                      title={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[1] &&
                        forecastData.list[1].weather &&
                        forecastData.list[1].weather[0] &&
                        forecastData.list[1].weather[0].description
                      }
                    />

                    <span className="span">
                      <p className="title-2">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[1] &&
                          forecastData.list[1].main &&
                          Math.round(forecastData.list[1].main.temp)}
                        &deg;<sub>c</sub>
                      </p>
                    </span>
                  </div>

                  {/* For Date */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[1].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>

                  {/* For Time */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[1].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>
                </li>

                {/* 3rd Day */}
                <li className="card-item">
                  <div className="icon-wrapper">
                    <img
                      src={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[2] &&
                        forecastData.list[2].weather &&
                        forecastData.list[2].weather[0] &&
                        `../src/assets/figma_weather_icons/${forecastData.list[2].weather[0].icon}.png`
                      }
                      alt={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[2] &&
                        forecastData.list[2].weather &&
                        forecastData.list[2].weather[0] &&
                        forecastData.list[2].weather[0].description
                      }
                      width="36"
                      height="36"
                      className="weather-icon"
                      title={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[2] &&
                        forecastData.list[2].weather &&
                        forecastData.list[2].weather[0] &&
                        forecastData.list[2].weather[0].description
                      }
                    />

                    <span className="span">
                      <p className="title-2">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[2] &&
                          forecastData.list[2].main &&
                          Math.round(forecastData.list[2].main.temp)}
                        &deg;<sub>c</sub>
                      </p>
                    </span>
                  </div>

                  {/* For date */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[2].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>

                  {/* For time */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[2].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>
                </li>

                {/* 4th Day */}
                <li className="card-item">
                  <div className="icon-wrapper">
                    <img
                      src={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[3] &&
                        forecastData.list[3].weather &&
                        forecastData.list[3].weather[0] &&
                        `../src/assets/figma_weather_icons/${forecastData.list[3].weather[0].icon}.png`
                      }
                      alt={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[3] &&
                        forecastData.list[3].weather &&
                        forecastData.list[3].weather[0] &&
                        forecastData.list[3].weather[0].description
                      }
                      width="36"
                      height="36"
                      className="weather-icon"
                      title={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[3] &&
                        forecastData.list[3].weather &&
                        forecastData.list[3].weather[0] &&
                        forecastData.list[3].weather[0].description
                      }
                    />

                    <span className="span">
                      <p className="title-2">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[3] &&
                          forecastData.list[3].main &&
                          Math.round(forecastData.list[3].main.temp)}
                        &deg;<sub>c</sub>
                      </p>
                    </span>
                  </div>

                  {/* For Date */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[3].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>

                  {/* For Time */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[3].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>
                </li>

                {/* 5th Day */}
                <li className="card-item">
                  <div className="icon-wrapper">
                    <img
                      src={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[4] &&
                        forecastData.list[4].weather &&
                        forecastData.list[4].weather[0] &&
                        `../src/assets/figma_weather_icons/${forecastData.list[4].weather[0].icon}.png`
                      }
                      alt={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[4] &&
                        forecastData.list[4].weather &&
                        forecastData.list[4].weather[0] &&
                        forecastData.list[4].weather[0].description
                      }
                      width="36"
                      height="36"
                      className="weather-icon"
                      title={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[4] &&
                        forecastData.list[4].weather &&
                        forecastData.list[4].weather[0] &&
                        forecastData.list[4].weather[0].description
                      }
                    />

                    <span className="span">
                      <p className="title-2">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[4] &&
                          forecastData.list[4].main &&
                          Math.round(forecastData.list[4].main.temp)}
                        &deg;<sub>c</sub>
                      </p>
                    </span>
                  </div>

                  {/* For Date */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[4].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>

                  {/* For Time */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[4].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>
                </li>

                {/* 6th Day */}
                <li className="card-item">
                  <div className="icon-wrapper">
                    <img
                      src={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[6] &&
                        forecastData.list[6].weather &&
                        forecastData.list[6].weather[0] &&
                        `../src/assets/figma_weather_icons/${forecastData.list[6].weather[0].icon}.png`
                      }
                      alt={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[6] &&
                        forecastData.list[6].weather &&
                        forecastData.list[6].weather[0] &&
                        forecastData.list[6].weather[0].description
                      }
                      width="36"
                      height="36"
                      className="weather-icon"
                      title={
                        forecastData &&
                        forecastData.list &&
                        forecastData.list[6] &&
                        forecastData.list[6].weather &&
                        forecastData.list[6].weather[0] &&
                        forecastData.list[6].weather[0].description
                      }
                    />

                    <span className="span">
                      <p className="title-2">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[6] &&
                          forecastData.list[6].main &&
                          Math.round(forecastData.list[6].main.temp)}
                        &deg;<sub>c</sub>
                      </p>
                    </span>
                  </div>

                  {/* For Date */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[6].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>

                  {/* For Time */}
                  <p className="label-1">
                    {new Date(
                      (forecastData.list[6].dt + forecastData.city.timezone) *
                        1000
                    ).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                      timeZone: "UTC", // Set to UTC to consider the offset
                    })}
                  </p>
                </li>
              </ul>
            </div>
          </>
        )}
    </section>
  );
};

export default HourlyForecast;
