import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilTachometerFast,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
    pressure,
  },units, setUnits 
}) {
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-between text-white py-3 mr-4">
          <div className="flex flex-row items-center">
            <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
            <p className="text-5xl">{`${temp.toFixed()}°`}</p>
          </div>
          <div className="flex flex-row space-y-2 items-center">
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="flex font-light text-sm items-center justify-center">
                <UilTemperature size={18} className="mr-1" />
                Real fell:
                <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
              </div>
              <div className="flex font-light text-sm items-center justify-center">
                <UilTear size={18} className="mr-1" />
                Humidity:
                <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center ml-2 justify-center">
              <div className="flex font-light text-sm items-center justify-center">
                <UilWind size={18} className="mr-1" />
                Wind:
                <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
              </div>
              <div className="flex font-light text-sm items-center justify-center">
                <UilTachometerFast size={18} className="mr-1" />
                Pressure:
                <span className="font-medium ml-1">{`${pressure.toFixed()} hPa`}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            name="metric"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p className="text-xl text-white mx-1">|</p>
          <button
            name="imperial"
            className="text-xl text-white font-light transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °F
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
