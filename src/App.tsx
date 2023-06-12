import "./App.css";
import CloudLoader from "./components/cloud-loader";
import Header from "./components/header";
import InputForm from "./components/input-form";
import WeatherBlock from "./components/weather-block";
import { useRecoilValue } from "recoil";
import cloudLoaderVisibilityState from "./recoilState/CloudLoader";
import weatherDataState from "./recoilState/WeatherData";
import WeatherContainer from "./components/weather-container";

function App() {
  const cloudLoaderVisibility = useRecoilValue(cloudLoaderVisibilityState);
  const weatherData = useRecoilValue(weatherDataState);

  return (
    <div className="App">
      <Header />
      <InputForm />
      <WeatherContainer weatherData={weatherData} />
      <CloudLoader visibility={cloudLoaderVisibility} />
    </div>
  );
}

export default App;
