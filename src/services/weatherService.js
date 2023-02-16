const API_KEY = "afb3a4d27d684e4a9ab90541231602";
const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";

// https://api.weatherapi.com/v1/forecast.json?key=afb3a4d27d684e4a9ab90541231602&q=London#


const getWeatherData = (searchParams) => {
    const url = new URL(BASE_URL);
    url.search = new URLSearchParams({...searchParams, key: API_KEY});

    console.log(url);
    return fetch(url).then((res) => res.json()).then((data) => data);
} 

export default getWeatherData;