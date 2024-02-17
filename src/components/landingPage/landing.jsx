import React, { useEffect } from "react";
import "./landing.css";

const landing = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-animation");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-animation");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-container">
      <h1 className="hero-title hidden-animation">
        What's the <span className="title-highlight">Climate</span> in your{" "}
        <span className="title-highlight">Area</span>?
      </h1>
      <p className="hero-description hidden-animation">
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
