import React from "react";
import './FooterSection.css'
import OpenWeather from '../../assets/openweather.png';

const FooterSection = () => {
  return (
    <footer className="footer">
      <p className="body-3">Made with ❤</p>

      <p className="body-3">
        Powered By{" "}
        <a
          href="https://openweathermap.org/"
          title="Visit OpenWeather for free API"
          target="_blank"
          rel="noopener"
        >
          <img
            src={OpenWeather}
            className="openweather-icon"
            loading="lazy"
            alt="openweather image"
            width="150"
            height="30"
          />
        </a>
      </p>
    </footer>
  );
};

export default FooterSection;
