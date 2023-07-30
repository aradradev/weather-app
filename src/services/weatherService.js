const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '7dc54c047c8e51cfccd1b97c97f078bf';

const getWeatherData = (infoType, seachParams) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...seachParams, appid: API_KEY });
  console.log(url);
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeatherData;
