import React, { useState, useEffect } from "react";
import "./header.css";
import {
  fetchData,
  url,
  fetchWeatherDetails,
  fetchLocationName,
} from "../../utils/api";
import logo from "../../assets/climera-logo3.png";

const Header = ({ onCitySelect }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState(false);
  const [noResults, setNoResults] = useState(false);

  let searchTimeout = null;
  const searchTimeoutDuration = 500;

  const openSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  const closeSearch = () => {
    setIsSearchActive(false);
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  // To get user location by clicking the button
  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch location name using reverse geocoding
          fetchLocationName(latitude, longitude, (locationName) => {
            fetchWeatherDetails(
              latitude,
              longitude,
              ({ weatherDetails, forecastData, airPollutionData }) => {
                // Pass weather details, forecast data, air pollution data, and location name to parent component
                onCitySelect(
                  { name: locationName, lat: latitude, lon: longitude },
                  weatherDetails,
                  forecastData,
                  airPollutionData
                );
              }
            );
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          // Handle error, such as displaying a message to the user
        }
      );
    } else {
      console.error("Geolocation not supported");
      // Handle case where geolocation is not supported
    }
  };

  // for search-field result
  useEffect(() => {
    searchTimeout && clearTimeout(searchTimeout);

    if (searchField) {
      setSearching(true);
      setSearchResult([]);

      searchTimeout = setTimeout(() => {
        fetchData(url.geo(searchField), function (locations) {
          setSearching(false);
          setSearchResult(locations);
          setNoResults(locations.length === 0);
        });
      }, searchTimeoutDuration);
    }
  }, [searchField]);

  const handleCitySelect = (selectedCity) => {
    fetchWeatherDetails(
      selectedCity.lat,
      selectedCity.lon,
      ({ weatherDetails, forecastData, airPollutionData }) => {
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
            <span className="m-icon leading-icon search-city-icon">location_on</span>
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
            {noResults ? (
              <ul className="view-list" data-search-list>
                <li className="view-item">
                  <p style={{ margin: "0 auto" }}>No results found</p>
                </li>
              </ul>
            ) : (
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
            )}
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
            onClick={handleGetLocation}
          >
            <span className="m-icon">home_pin</span>
            <span className="span">Your Location</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
