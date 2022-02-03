import axios from "axios";

const API_KEY = "f2a6a7579115712206a2f69e20480500";

const getCoordinates = async (city) => {
  let response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  response = {
    name: response.data.name,
    country: response.data.sys.country,
    lat: response.data.coord.lat,
    lon: response.data.coord.lon,
  }
  return response
};

export const getData = async (city) => {
  const { name, country, lat, lon } = await getCoordinates(city);

  let response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&lang=es&appid=${API_KEY}`
  );

  response = {
    name,
    country,
    current: {
      date: response.data.current.dt,
      temp: response.data.current.temp,
      feels_like: response.data.current.feels_like,
      weather_description: response.data.current.weather[0].description,
      weather_icon: response.data.current.weather[0].icon
    },
    daily: response.data.daily.map((day) => {
      return {
        date: day.dt,
        min_temp: day.temp.min,
        max_temp: day.temp.max,
        weather_description: day.weather[0].description,
        weather_icon: day.weather[0].icon
      }
    })
  }

  return response
};
