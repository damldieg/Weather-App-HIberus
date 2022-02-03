import axios from "axios";

const API_KEY = "f2a6a7579115712206a2f69e20480500";

const getCoordinates = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  return response.data.coord;
};

export const getData = async (city) => {
  const { lat, lon } = await getCoordinates(city);

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_KEY}`
  );

  console.log(response.data);
};
