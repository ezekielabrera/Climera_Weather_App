"use strict";

const api_key = "3a09a9281f3d3859d3947352fb708227";

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=3a09a9281f3d3859d3947352fb708227";

fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log("API Response Data:", data))
  .catch(error => console.error('Error:', error));


/**
 * Fetch data from server
 * @param {string} URL Api url
 * @param {function} callback callback
 */

export const fetchData = function (URL, callback) {
  return fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log('API Response:', data); // Log the API response
      callback(data);
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};



export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}`;
  },
  // ... (other functions remain unchanged)

  airPollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
  },
  // hourlyforecast(lat,lon) {
  //   return `https://pro.openweathermap.org/data/2.5/forecast/hourly?${lat}&${lon}`;
  // },

  reverseGeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
  },
  /**
   * @param {string} query Search query e.g: "London", "New York"
   * @returns 
   */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
  }
};

// ...

// To access other info form API
export const fetchWeatherDetails = function (lat, lon, callback) {
  const weatherDetailsURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

  const airPollutionURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;

  // const hourlyforecastURL = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${api_key}`;

  // Fetch weather details
  const weatherDetailsPromise = fetch(weatherDetailsURL)
    .then((res) => res.json());

  // Fetch forecast data
  const forecastPromise = fetch(forecastURL)
    .then((res) => res.json());

  // Fetch air pollution promise
  const airPollutionPromise = fetch(airPollutionURL).then((res) => res.json());

  // Fetch hourlyforecast promise
  // const hourlyforecastPromise = fetch(hourlyforecastURL).then((res) => res.json());

  // Combine both promises using Promise.all
  Promise.all([weatherDetailsPromise, forecastPromise, airPollutionPromise ])
    .then(([weatherDetails, forecastData, airPollutionData]) => {
      console.log('Weather Details:', weatherDetails); // Log the weather details
      console.log('Forecast Data:', forecastData); // Log the forecast data
      console.log('Air Pollution Data:', airPollutionData);
      // console.log('Hourly Forecast Data:', hourlyforecastData);
      // Pass both weather details and forecast data to the callback
      callback({ weatherDetails, forecastData, airPollutionData});
    })
    .catch(error => {
      console.error('Error fetching weather details or forecast data:', error);
      throw error;
    });
};
