import React from "react";
import "../App.css";
import windIcon from "../assets/windIcon.png";

function WeatherBlock() {
  return (
    <div className="weatherBlock">
      <div className="cityTimeContainer">
        <p className="cityName">Warszawa</p>
        <p className="time">20:00</p>
      </div>
      <p className="temp">20°C</p>
      <div className="weatherIconDescriptionContainer">
        <img
          className="weatherIcon"
          src="https://openweathermap.org/img/wn/10d@2x.png"
        />
        <p className="weatherDesc">PogodaPogodaPogoda</p>
      </div>

      <div className="windContainer">
        <img className="windIcon" src={windIcon} />
        <p className="windSpeed">20km/h</p>
      </div>
    </div>
  );
}

export default WeatherBlock;
