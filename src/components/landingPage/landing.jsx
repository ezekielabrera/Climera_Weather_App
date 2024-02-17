import React from "react";
import "./landing.css";

const landing = () => {
  return (
    <div className="hero-container">
      <h1
        className="hero-title"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        What's the <span className="title-highlight">Climate</span> in your{" "}
        <span className="title-highlight">Area</span>?
      </h1>
      <p
        className="hero-description"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        Curious about the weather outside? Our web app has you covered! Find out
        what's happening in your area with just a tap.
        <br /> Get quick updates on temperature, rain, and more, tailored to
        your location. It's like having a weather report made just for you!
        <br />
        Simply type any location on the search bar or hit the button above to
        get instant updates!
      </p>
    </div>
  );
};

export default landing;
