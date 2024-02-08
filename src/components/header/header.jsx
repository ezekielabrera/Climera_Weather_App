import React, { useState, useEffect } from "react";
import "./header.css";

import { fetchData, url, fetchWeatherDetails } from "../../utils/api"; // Adjust the path accordingly
import logo from "../../assets/logo.png";

const Header = ({ onCitySelect }) => {

  // For Mobile View Search interface
  const [isSearchActive, setIsSearchActive] = useState(false);

  const openSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  const closeSearch = () => {
    setIsSearchActive(false);
  };

  // For search result
  const [searchField, setSearchField] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState(false);

  let searchTimeout = null;
  const searchTimeoutDuration = 500;

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    searchTimeout && clearTimeout(searchTimeout);

    if (searchField) {
      setSearching(true);
      setSearchResult([]);

      searchTimeout = setTimeout(() => {
        fetchData(url.geo(searchField), function (locations) {
          setSearching(false);
          setSearchResult(locations);
        });
      }, searchTimeoutDuration);
    }
  }, [searchField]);

  // For selecting the searched city
  const handleCitySelect = (selectedCity) => {
    console.log("User selected city:", selectedCity);

    // Call fetchWeatherDetails when a city is selected
    fetchWeatherDetails(
      selectedCity.lat,
      selectedCity.lon,
      ({ weatherDetails, forecastData, airPollutionData }) => {
        // Do something with weatherDetails and forecastData
        console.log("Weather Details in Header:", weatherDetails);
        console.log("Forecast Data in Header:", forecastData);
        console.log("Air Pollution in Header:", airPollutionData);

        // Pass selectedCity, weatherDetails, and forecastData to the onCitySelect callback
        onCitySelect(
          selectedCity,
          weatherDetails,
          forecastData,
          airPollutionData
        );
      }
    );
  };

  return (
    <header className="header">
      <div className="container">
        <a href="" className="logo">
          <img src={logo} alt="logo" className="logo" />
        </a>

        <div
          className={`search-view ${isSearchActive ? "active" : ""}`}
          data-search-view
        >
          <div className="search-wrapper">
            <input
              type="search"
              name="search"
              className={`search-field ${searching ? "searching" : ""}`}
              placeholder="Search city..."
              autoComplete="off"
              data-search-field
              onChange={handleChange}
            />

            <span className="m-icon leading-icon">search</span>

            <button
              className="icon-btn leading-icon has-state"
              aria-label="close search"
              data-search-toggler
              onClick={closeSearch}
            >
              <span className="m-icon">arrow_back</span>
            </button>
          </div>

          <div
            className={`search-result ${
              searching || searchField ? "active" : ""
            }`}
            data-search-result
          >
            <ul className="view-list" data-search-list>
              {searchResult.map(({ name, lat, lon, country, state }) => (
                <li key={`${lat}-${lon}`} className="view-item">
                  <span className="m-icon">Location_on</span>
                  <div>
                    <p className="item-title">{name}</p>
                    <p className="label-2 item-subtitle">
                      {state || ""} {country}
                    </p>
                  </div>
                  <a
                    href={`#/weather?lat=${lat}&lon=${lon}`}
                    className="item-link has-state"
                    aria-label={`${name} weather`}
                    data-search-toggler
                    onClick={() =>
                      handleCitySelect({ name, lat, lon, country, state })
                    }
                  ></a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="icon-btn has-state"
            aria-label="open search"
            data-search-toggler
            onClick={openSearch}
          >
            <span className="m-icon icon">search</span>
          </button>

          <a
            href="#/current-location"
            className="btn-primary has-state"
            data-current-location-btn
          >
            <span className="m-icon">my_location</span>
            <span className="span">Current Location</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
