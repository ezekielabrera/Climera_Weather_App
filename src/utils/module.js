"use strict";


export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air quality is considered satisfactory, and air pollution poses little or no risk",
  },
  2: {
    level: "Fair",
    message: "Air Quality is acceptable."
  },
  3: {
    level: "Moderate",
    message: "Members of sensitive groups may experience health effects."
  },
  4: {
    level: "Poor",
    message: "Everyone may begin to experience health effects."
  },
  5: {
    level: "Very Poor",
    message: "Health warnings of emergency conditions."
  }
};

// Export a function to get the AQI text based on the level
export const getAqiText = (level) => {
  return aqiText[level] || {}; // Return an empty object if the level is not found
};
