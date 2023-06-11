import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import _ from "lodash";
import { WeatherContext } from "../App";
interface CityFormData {
  city: string;
}

interface GeoResponse {
  lat: number;
  lon: number;
}

const formSchema = yup.object().shape({
  city: yup.string().required("You must add a city first"),
});

//const {weatherDataArray, setWeatherDataArray} = useContext(WeatherContext);

function InputForm() {
  const apiKey: string = "58386f423a9e7da5fd328c42985fc43e";
  const [weatherDataArray, setWeatherDataArray] = useState<Array<object>>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CityFormData>({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    console.log(weatherDataArray);
  }, [weatherDataArray]);

  const onSubmit = async (data: CityFormData) => {
    const geoResponse = await axios.get<GeoResponse[]>(
      `http://api.openweathermap.org/geo/1.0/direct?q=${data.city}&appid=${apiKey}`
    );
    const geoData: GeoResponse = geoResponse.data[0];

    const weatherResponse = await axios.get<any>(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${geoData.lat}&lon=${geoData.lon}&appid=${apiKey}`
    );

    const weatherData = weatherResponse.data.list[0];
    const weatherBlockData = {
      time: weatherData.dt,
      tempMin: weatherData.main.temp_min,
      tempMax: weatherData.main.temp_max,
      weather: weatherData.weather[0].main,
      wind_speed: weatherData.wind.speed,
    };

    const alreadyExists = weatherDataArray.find((item: any) =>
      _.isEqual(item, weatherBlockData)
    );

    if (!alreadyExists) {
      setWeatherDataArray([...weatherDataArray, weatherBlockData]);
    }
  };

  return (
    <form className="weatherForm" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Enter city" {...register("city")} />
      {errors.city && <p>{errors.city.message}</p>}
      <input type="submit" value="Check Weather" />
    </form>
  );
}

export default InputForm;
