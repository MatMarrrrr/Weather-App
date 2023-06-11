import "./App.css";
import Header from "./components/header";
import InputForm from "./components/input-form";
import WeatherBlock from "./components/weather-block";

function App() {

  return (
    <div className="App">
        <Header />
        <InputForm />
        <WeatherBlock />
    </div>
  );
}

export default App;
