import React from "react";

import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilTachometerFast,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        CLOUDY
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          className="w-20"
          alt="weather icon"
        ></img>
        <p className="text-4xl">32°</p>

        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col space-y-2">
            <div className="flex font-light text-sm items-center justify-center">
              <UilTemperature size={18} className="mr-1" />
              Feels Like:
              <span className="font-medium ml-1 "> 32°</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilTear size={18} className="mr-1" />
              Humidity:
              <span className="font-medium ml-1 "> 50%</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2 ml-2">
            <div className="flex font-light text-sm items-center justify-center">
              <UilWind size={18} className="mr-1" />
              Wind:
              <span className="font-medium ml-1 ">3 km/h</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilTachometerFast size={18} className="mr-1" />
              Pressure:
              <span className="font-medium ml-1 "> 2 Pa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">07:45 PM</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp />
        <p className="font-light">
          Max: <span className="font-medium ml-1">35°C</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown />
        <p className="font-light">
          Min: <span className="font-medium ml-1">35°C</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureDetails;

//http://openweathermap.org/img/wn/01d@2x.png
