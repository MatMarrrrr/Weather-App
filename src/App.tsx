import "./App.css";
import CloudLoader from "./components/cloud-loader";
import Header from "./components/header";
import InputForm from "./components/input-form";
import { useRecoilValue } from "recoil";
import cloudLoaderVisibilityState from "./recoilState/CloudLoader";
import weatherDataState from "./recoilState/WeatherData";
import weatherContainerVisibilityState from "./recoilState/WeatherContainer";
import WeatherContainer from "./components/weather-container";

function App() {
  const cloudLoaderVisibility = useRecoilValue(cloudLoaderVisibilityState);
  const weatherData = useRecoilValue(weatherDataState);
  const weatherWisibility = useRecoilValue(weatherContainerVisibilityState);

  return (
    <div className="App">
      <Header />
      <InputForm />
      <WeatherContainer weatherData={weatherData} visibility={weatherWisibility}/>
      <CloudLoader visibility={cloudLoaderVisibility} />
    </div>
  );
}

export default App;
