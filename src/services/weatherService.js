const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '7dc54c047c8e51cfccd1b97c97f078bf';

const getWeatherData = (infoType, seachParams) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...seachParams, appid: API_KEY });
  console.log(url);
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];

  return {
    lon,
    lat,
    temp,
    temp_max,
    temp_min,
    feels_like,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async (seachParams) => {
  const formattedCurrentWeather = await getWeatherData(
    'weather',
    seachParams
  ).then(formatCurrentWeather);
  return formattedCurrentWeather;
};

export default getFormattedWeatherData;