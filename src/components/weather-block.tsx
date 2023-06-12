import "../App.css";
import windIcon from "../assets/windIcon.png";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function WeatherBlock(props: any) {
  return (
    <div className="weatherBlock">
      <div className="cityTimeContainer">
        <p className="cityName">{props.city}</p>
        <p className="time">{new Date(props.data.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
      <p className="temp">{Math.round((props.data.tempMax + props.data.tempMin) / 2)}°C</p>
      <div className="weatherIconDescriptionContainer">
        <img
          className="weatherIcon"
          src={`https://openweathermap.org/img/wn/${props.data.weatherIcon}@2x.png`}
        />
        <p className="weatherDesc">{capitalizeFirstLetter(props.data.weatherDesc)}</p>
      </div>

      <div className="windContainer">
        <img className="windIcon" src={windIcon} />
        <p className="windSpeed">{props.data.wind_speed}km/h</p>
      </div>
    </div>
  );
}

export default WeatherBlock;