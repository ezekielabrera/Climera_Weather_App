import React, { useEffect, useRef } from "react";
import "./Highlights.css";

import { getAqiText } from "../../utils/module";

const Highlights = ({
  selectedCity,
  weatherDetails,
  forecastData,
  airPollutionData,
}) => {

  const observerRef = useRef(null); // Use a ref to store the observer instance

  useEffect(() => {
    // Create the IntersectionObserver only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("highlight-show-animation");
          } else {
            entry.target.classList.remove("highlight-show-animation");
          }
        });
      });
    }

    const hiddenElements = document.querySelectorAll(".highlight-hidden-animation");
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    // Clean up the observer when the component is unmounted
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [selectedCity, weatherDetails]); // Update the effect when selectedCity or weatherDetails change

  return (
    <div>
      {/* Highlights */}
      <section
        className="section highlights"
        aria-labelledby="highlights-label"
        data-highlights
      >
        {selectedCity && airPollutionData && airPollutionData.list && (
          <div className="card card-lg highlight-hidden-animation">
            <h2 className="title-2" id="highlights-label">
              Todays Highlights
            </h2>

            <div className="highlight-list">
              <div className="card card-sm highlight-card one">
                <h3 className="title-3">Air Quality Index</h3>

                <div className="wrapper">
                  <span className="m-icon">air</span>

                  <ul className="card-list">
                    <li className="card-item">
                      <p className="title-1">
                        {airPollutionData.list[0] &&
                          airPollutionData.list[0].components.pm2_5.toPrecision(
                            3
                          )}
                      </p>
                      <p className="label-1">
                        PM<sub>2.5</sub>
                      </p>
                    </li>

                    <li className="card-item">
                      <p className="title-1">
                        {airPollutionData.list[0] &&
                          airPollutionData.list[0].components.so2.toPrecision(
                            3
                          )}
                      </p>
                      <p className="label-1">
                        SO<sub>2</sub>
                      </p>
                    </li>

                    <li className="card-item">
                      <p className="title-1">
                        {airPollutionData.list[0] &&
                          airPollutionData.list[0].components.no2.toPrecision(
                            3
                          )}
                      </p>
                      <p className="label-1">
                        NO<sub>2</sub>
                      </p>
                    </li>

                    <li className="card-item">
                      <p className="title-1">
                        {airPollutionData.list[0] &&
                          airPollutionData.list[0].components.o3.toPrecision(3)}
                      </p>
                      <p className="label-1">
                        O<sub>3</sub>
                      </p>
                    </li>
                  </ul>
                </div>
                {airPollutionData.list[0] &&
                  airPollutionData.list[0].main.aqi && (
                    <span
                      className={`badge aqi-${
                        airPollutionData.list[0] &&
                        airPollutionData.list[0].main.aqi
                      } label-1`}
                      title={`${
                        getAqiText(airPollutionData.list[0].main.aqi).message
                      }`}
                    >
                      {getAqiText(airPollutionData.list[0].main.aqi).level}
                    </span>
                  )}
              </div>

              <div className="card card-sm highlight-card two">
                <h3 className="title-3">Sunrise & Sunset</h3>

                <div className="card-list">
                  <div className="card-item">
                    <span className="m-icon">clear_day</span>
                    {forecastData && forecastData.city && (
                      <div>
                        <p className="label-1">Sunrise</p>
                        <p className="title-1">
                          {new Date(
                            forecastData.city.sunrise * 1000
                          ).toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="card-item">
                    <span className="m-icon">clear_night</span>

                    <div>
                      <p className="label-1">Sunset</p>
                      <p className="title-1">
                        {new Date(
                          forecastData.city.sunset * 1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {selectedCity && weatherDetails && weatherDetails.main && (
                <div className="card card-sm highlight-card">
                  <h3 className="title-3">Humidity</h3>

                  <div className="wrapper">
                    <span className="m-icon">humidity_percentage</span>

                    <p className="title-1">
                      {weatherDetails.main.humidity}
                      <sub>%</sub>
                    </p>
                  </div>
                </div>
              )}
              {selectedCity && weatherDetails && weatherDetails.main && (
                <div className="card card-sm highlight-card">
                  <h3 className="title-3">Pressure</h3>

                  <div className="wrapper">
                    <span className="m-icon">airwave</span>

                    <p className="title-1">
                      {weatherDetails.main.pressure}
                      <sub>hPa</sub>
                    </p>
                  </div>
                </div>
              )}
              {selectedCity && weatherDetails && (
                <div className="card card-sm highlight-card">
                  <h3 className="title-3">Visibility</h3>

                  <div className="wrapper">
                    <span className="m-icon">visibility</span>

                    <p className="title-1">
                      {weatherDetails.visibility / 1000}
                      <sub>km</sub>
                    </p>
                  </div>
                </div>
              )}
              {selectedCity && weatherDetails && weatherDetails.main && (
                <div className="card card-sm highlight-card">
                  <h3 className="title-3">Feels Like</h3>

                  <div className="wrapper">
                    <span className="m-icon">thermostat</span>

                    <p className="title-1">
                      {Math.round(weatherDetails.main.feels_like)}&deg;
                      <sub>C</sub>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Highlights;
