import { atom } from "recoil";

export type WeatherDataType = {
  [key in string]: any;
};

const weatherDataState = atom<WeatherDataType>({
  key: "weatherData",
  default: {},
});

export default weatherDataState;
