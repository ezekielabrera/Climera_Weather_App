import React from "react";
import "./WeekForecast.css";

import icon2 from "../../assets/weather_icons/01n.png";
import icon3 from "../../assets/weather_icons/direction.png";

const WeekForecast = ({ selectData, forecastData }) => {
  return (
    <div>
      {/* Hourly Forecast */}

      <section
        className="section hourly-forecast"
        aria-label="hourly forecast"
        data-hourly-forecast
      >
        {forecastData &&
          forecastData.list &&
          forecastData.list[0] &&
          forecastData.list[0].dt && (
            // 1st Row
            // list 10
            <>
              <h2 className="title-2">1 Week Forecast</h2>

              <div className="slider-container">
                <ul className="slider-list" data-temp>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[10].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[10].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[10] &&
                          forecastData.list[10].weather &&
                          forecastData.list[10].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[10].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[10] &&
                          forecastData.list[10].weather &&
                          forecastData.list[10].weather[0] &&
                          forecastData.list[10].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[10] &&
                          forecastData.list[10].weather &&
                          forecastData.list[10].weather[0] &&
                          forecastData.list[10].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[10] &&
                          forecastData.list[10].main &&
                          Math.round(forecastData.list[10].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 12 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[12].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[12].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[12] &&
                          forecastData.list[12].weather &&
                          forecastData.list[12].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[12].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[12] &&
                          forecastData.list[12].weather &&
                          forecastData.list[12].weather[0] &&
                          forecastData.list[12].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[12] &&
                          forecastData.list[12].weather &&
                          forecastData.list[12].weather[0] &&
                          forecastData.list[12].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[12] &&
                          forecastData.list[12].main &&
                          Math.round(forecastData.list[12].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 14 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[14].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[14].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[14] &&
                          forecastData.list[14].weather &&
                          forecastData.list[14].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[14].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[14] &&
                          forecastData.list[14].weather &&
                          forecastData.list[14].weather[0] &&
                          forecastData.list[14].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[14] &&
                          forecastData.list[14].weather &&
                          forecastData.list[14].weather[0] &&
                          forecastData.list[14].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[14] &&
                          forecastData.list[14].main &&
                          Math.round(forecastData.list[14].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 15 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[15].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[15].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[15] &&
                          forecastData.list[15].weather &&
                          forecastData.list[15].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[15].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[15] &&
                          forecastData.list[15].weather &&
                          forecastData.list[15].weather[0] &&
                          forecastData.list[15].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[15] &&
                          forecastData.list[15].weather &&
                          forecastData.list[15].weather[0] &&
                          forecastData.list[15].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[15] &&
                          forecastData.list[15].main &&
                          Math.round(forecastData.list[15].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 16 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[16].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[16].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[16] &&
                          forecastData.list[16].weather &&
                          forecastData.list[16].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[16].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[16] &&
                          forecastData.list[16].weather &&
                          forecastData.list[16].weather[0] &&
                          forecastData.list[16].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[16] &&
                          forecastData.list[16].weather &&
                          forecastData.list[16].weather[0] &&
                          forecastData.list[16].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[16] &&
                          forecastData.list[16].main &&
                          Math.round(forecastData.list[16].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 18 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[18].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,
                        <br />
                        {new Date(
                          (forecastData.list[18].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[18] &&
                          forecastData.list[18].weather &&
                          forecastData.list[18].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[18].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[18] &&
                          forecastData.list[18].weather &&
                          forecastData.list[18].weather[0] &&
                          forecastData.list[18].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[18] &&
                          forecastData.list[18].weather &&
                          forecastData.list[18].weather[0] &&
                          forecastData.list[18].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[18] &&
                          forecastData.list[18].main &&
                          Math.round(forecastData.list[18].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* <li className="slider-item">
        <div className="card card-sm slider-card">
          <p className="body-3">03 PM</p>

          <img
            src={icon2}
            alt=""
            title=""
            width="48"
            height="48"
            loading="Lazy"
            className="weather-icon"
          />

          <p className="body-3">25&deg;</p>
        </div>
      </li> */}
                </ul>

                {/* 2nd Row */}
                {/* list 20 */}
                <ul className="slider-list" data-wind>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[20].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[20].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[20] &&
                          forecastData.list[20].weather &&
                          forecastData.list[20].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[20].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[20] &&
                          forecastData.list[20].weather &&
                          forecastData.list[20].weather[0] &&
                          forecastData.list[20].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[20] &&
                          forecastData.list[20].weather &&
                          forecastData.list[20].weather[0] &&
                          forecastData.list[20].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[20] &&
                          forecastData.list[20].main &&
                          Math.round(forecastData.list[20].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 22 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[22].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[22].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[22] &&
                          forecastData.list[22].weather &&
                          forecastData.list[22].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[22].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[22] &&
                          forecastData.list[22].weather &&
                          forecastData.list[22].weather[0] &&
                          forecastData.list[22].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[22] &&
                          forecastData.list[22].weather &&
                          forecastData.list[22].weather[0] &&
                          forecastData.list[22].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[22] &&
                          forecastData.list[22].main &&
                          Math.round(forecastData.list[22].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 24 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[24].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[24].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[24] &&
                          forecastData.list[24].weather &&
                          forecastData.list[24].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[24].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[24] &&
                          forecastData.list[24].weather &&
                          forecastData.list[24].weather[0] &&
                          forecastData.list[24].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[24] &&
                          forecastData.list[24].weather &&
                          forecastData.list[24].weather[0] &&
                          forecastData.list[24].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[24] &&
                          forecastData.list[24].main &&
                          Math.round(forecastData.list[24].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 26 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[26].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[26].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[26] &&
                          forecastData.list[26].weather &&
                          forecastData.list[26].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[26].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[26] &&
                          forecastData.list[26].weather &&
                          forecastData.list[26].weather[0] &&
                          forecastData.list[26].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[26] &&
                          forecastData.list[26].weather &&
                          forecastData.list[26].weather[0] &&
                          forecastData.list[26].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[26] &&
                          forecastData.list[26].main &&
                          Math.round(forecastData.list[26].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 28 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[28].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[28].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[28] &&
                          forecastData.list[28].weather &&
                          forecastData.list[28].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[28].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[28] &&
                          forecastData.list[28].weather &&
                          forecastData.list[28].weather[0] &&
                          forecastData.list[28].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[28] &&
                          forecastData.list[28].weather &&
                          forecastData.list[28].weather[0] &&
                          forecastData.list[28].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[28] &&
                          forecastData.list[28].main &&
                          Math.round(forecastData.list[28].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 30 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[30].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[30].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[30] &&
                          forecastData.list[30].weather &&
                          forecastData.list[30].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[30].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[30] &&
                          forecastData.list[30].weather &&
                          forecastData.list[30].weather[0] &&
                          forecastData.list[30].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[30] &&
                          forecastData.list[30].weather &&
                          forecastData.list[30].weather[0] &&
                          forecastData.list[30].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[30] &&
                          forecastData.list[30].main &&
                          Math.round(forecastData.list[30].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>
                </ul>

                {/* 3rd Row */}
                {/* list 31 */}
                <ul className="slider-list" data-wind>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[31].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[31].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[31] &&
                          forecastData.list[31].weather &&
                          forecastData.list[31].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[31].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[31] &&
                          forecastData.list[31].weather &&
                          forecastData.list[31].weather[0] &&
                          forecastData.list[31].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[31] &&
                          forecastData.list[31].weather &&
                          forecastData.list[31].weather[0] &&
                          forecastData.list[31].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[31] &&
                          forecastData.list[31].main &&
                          Math.round(forecastData.list[31].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 33 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[33].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[33].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[33] &&
                          forecastData.list[33].weather &&
                          forecastData.list[33].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[33].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[33] &&
                          forecastData.list[33].weather &&
                          forecastData.list[33].weather[0] &&
                          forecastData.list[33].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[33] &&
                          forecastData.list[33].weather &&
                          forecastData.list[33].weather[0] &&
                          forecastData.list[33].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[33] &&
                          forecastData.list[33].main &&
                          Math.round(forecastData.list[33].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 34 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[34].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[34].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[34] &&
                          forecastData.list[34].weather &&
                          forecastData.list[34].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[34].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[34] &&
                          forecastData.list[34].weather &&
                          forecastData.list[34].weather[0] &&
                          forecastData.list[34].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[34] &&
                          forecastData.list[34].weather &&
                          forecastData.list[34].weather[0] &&
                          forecastData.list[34].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[34] &&
                          forecastData.list[34].main &&
                          Math.round(forecastData.list[34].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 35 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[35].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[35].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[35] &&
                          forecastData.list[35].weather &&
                          forecastData.list[35].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[35].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[35] &&
                          forecastData.list[35].weather &&
                          forecastData.list[35].weather[0] &&
                          forecastData.list[35].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[35] &&
                          forecastData.list[35].weather &&
                          forecastData.list[35].weather[0] &&
                          forecastData.list[35].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[35] &&
                          forecastData.list[35].main &&
                          Math.round(forecastData.list[35].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 37 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[37].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[37].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[37] &&
                          forecastData.list[37].weather &&
                          forecastData.list[37].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[37].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[37] &&
                          forecastData.list[37].weather &&
                          forecastData.list[37].weather[0] &&
                          forecastData.list[37].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[37] &&
                          forecastData.list[37].weather &&
                          forecastData.list[37].weather[0] &&
                          forecastData.list[37].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[37] &&
                          forecastData.list[37].main &&
                          Math.round(forecastData.list[37].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>

                  {/* list 39 */}
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">
                        {new Date(
                          (forecastData.list[39].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                        ,<br />
                        {new Date(
                          (forecastData.list[39].dt +
                            forecastData.city.timezone) *
                            1000
                        ).toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                          timeZone: "UTC", // Set to UTC to consider the offset
                        })}
                      </p>

                      <img
                        src={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[39] &&
                          forecastData.list[39].weather &&
                          forecastData.list[39].weather[0] &&
                          `../src/assets/figma_weather_icons/${forecastData.list[39].weather[0].icon}.png`
                        }
                        alt={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[39] &&
                          forecastData.list[39].weather &&
                          forecastData.list[39].weather[0] &&
                          forecastData.list[39].weather[0].description
                        }
                        title={
                          forecastData &&
                          forecastData.list &&
                          forecastData.list[39] &&
                          forecastData.list[39].weather &&
                          forecastData.list[39].weather[0] &&
                          forecastData.list[39].weather[0].description
                        }
                        width="48"
                        height="48"
                        loading="Lazy"
                        className="weather-icon"
                      />

                      <p className="body-3">
                        {forecastData &&
                          forecastData.list &&
                          forecastData.list[39] &&
                          forecastData.list[39].main &&
                          Math.round(forecastData.list[39].main.temp)}
                        &deg;
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          )}
      </section>
    </div>
  );
};

export default WeekForecast;
