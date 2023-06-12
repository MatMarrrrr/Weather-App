import React from "react";
import "../App.css";
import WeatherBlock from "./weather-block";

function WeatherContainer(props: any) {
  return (
    <div className="weatherContainer">
      {Object.entries(props.weatherData).map(([city, weatherData]) => (
        <WeatherBlock key={city} city={city} data={weatherData} />
      ))}
    </div>
  );
}

export default WeatherContainer;