/*
This file was being used to impement WeatherAPI, due to increased complexity and limited time, it was kept aside to implement in the future.
*/

import { DateTime } from "luxon";

const API_KEY = "afb3a4d27d684e4a9ab90541231602";
const BASE_URL = "http://api.weatherapi.com/v1";

// https://api.weatherapi.com/v1/forecast.json?key=afb3a4d27d684e4a9ab90541231602&q=London#

const getWeatherData = (infotype, searchParams) => {
  const url = new URL(BASE_URL + "/" + infotype + ".json");
  url.search = new URLSearchParams({ key: API_KEY, ...searchParams });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatCurrentWeather = (data, curday) => {
  const {
    location: { loc_name, lat, lon },
    forecast: { forecastday },
  } = data;

  const { astro, date, date_epoch, day, hour } = forecastday[curday];

  const { sunrise, sunset } = astro;

  const {
    avgtemp_c,
    avgtemp_f,
    maxtemp_c,
    maxtemp_f,
    mintemp_c,
    mintemp_f,
    avghumidity: humidity,
    maxwind_kph: wind,
    condition,
  } = day;

  const { icon, text: detail } = condition;

  return {
    loc_name,
    lat,
    lon,
    date,
    date_epoch,
    hour,
    sunrise,
    sunset,
    avgtemp_c,
    avgtemp_f,
    humidity,
    wind,
    mintemp_c,
    mintemp_f,
    maxtemp_c,
    maxtemp_f,
    icon,
    detail,
  };
};

const formatForecastWeather = (data) => {
  const {
    forecast: { forecastday },
  } = data;
  let {location: tz_id} = forecastday;
  let {hourly} = forecastday

  let daily = forecastday.slice(1, 10).map((d) => {
    return {
        title: formatToLocalTime(d.location.localtime_epoch, tz_id, 'ccc'),
        temp: d.current.temp_c,
    };
  });
  console.log(daily);

  return daily;
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
) => {
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};

const getFormattedWeatherData = async (searchParams) => {
  let curday = 2; // 0 -> 9 days history
  const formattedCurrentWeather = await getWeatherData(
    "forecast",
    searchParams
  ).then((data) => formatCurrentWeather(data, (curday = 0)));

  const { loc_name } = formatCurrentWeather;
  const formattedForecastWeather = await getWeatherData(
    "forecast",
    searchParams
  ).then(formatForecastWeather);

  return formattedForecastWeather;
};
export default getFormattedWeatherData;
