import { useState, createContext, Dispatch, SetStateAction } from "react";
import "./App.css";
import Header from "./components/header";
import InputForm from "./components/input-form";
import WeatherBlock from "./components/weather-block";

interface WeatherContextType {
  weatherDataArray: Array<object>;
  setWeatherDataArray: Dispatch<SetStateAction<Array<object>>>;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

function App() {
  const [weatherDataArray, setWeatherDataArray] = useState<Array<object>>([]);

  return (
    <div className="App">
      <WeatherContext.Provider
        value={{ weatherDataArray, setWeatherDataArray }}
      >
        <Header />
        <InputForm />
        <WeatherBlock />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
