import "./ForecastWidget.css";

const ForecastWidget = () => {

  const windSpeedMetersPerSecond = 2.06 // Replace with your actual wind speed value
  const windSpeedKilometersPerHour = windSpeedMetersPerSecond * 3.6;
  const windDirectionDegrees = 110; // Replace with your actual wind direction value

console.log('Wind Speed (m/s):', windSpeedMetersPerSecond);
console.log('Wind Speed (km/h):', windSpeedKilometersPerHour);
console.log('Wind Direction (degrees):', windDirectionDegrees);

// You can convert degrees to a cardinal direction if needed
const windDirectionCardinal = getWindDirectionCardinal(windDirectionDegrees);
console.log('Wind Direction (cardinal):', windDirectionCardinal);

function getWindDirectionCardinal(degrees) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}
    
  return (
    <section
      className="section forecast"
      aria-labelledby="forecast-label"
      data-5-day-forecast
    >
      <h2 className="title-2" id="forecast-label">
        5 Days Forecast
      </h2>

      
          <div className="card card-lg forecast-card">
            <ul>
              {/* 2nd Day / Tomorrow */}
              <li className="card-item">
                <div className="icon-wrapper">
                  
                    <span className="m-icon">Air</span>
                    <p>Wind</p>
                    <p> | </p>
                    <span className="span">
                      <p className="title-2">
                        34 <sub>m/s</sub>
                      </p>
                    </span>
                  

                  
                  <span className="m-icon">North</span>
                  {/* <p>110</p> */}
                  {/* <p> | </p> */}
                  <span className="span">
                    <p className="title-2">
                      110&deg; <sub>E</sub>
                    </p>
                  </span>
                  
                </div>

                {/* For Date */}
                {/* <p className="label-1">
                  Aug, 25 2024
                </p> */}

                {/* For Time */}
                {/* <p className="label-1">
                  Friday
                </p> */}
              </li>
            </ul>
          </div>
    </section>
  );
};

export default ForecastWidget;
