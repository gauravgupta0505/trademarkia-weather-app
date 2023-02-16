import "./App.css";
import morningBg from "./assets/BG_Images/Final/Morning.jpg";
import eveningBg from "./assets/BG_Images/Final/Evening.jpg";
import nightBg from "./assets/BG_Images/Final/Night.jpg";

// import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  const [query, setQuery] = useState({ q: 'Calcutta' });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [bg, setBg] = useState(morningBg);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      // const message = "current location";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
        if (!weather) setBg(morningBg);
        const bgNum =
          weather.dt > 16200 && weather.dt < 55800
            ? 1
            : weather.dt >= 55800 && weather.dt < 73800
            ? 2
            : 3;
        if (bgNum == 1) {
          setBg(morningBg);
        } else if (bgNum == 2) {
          setBg(eveningBg);
        }
        setBg(nightBg);
      });
    };

    fetchWeather();
  }, [query, units]);


  return (
    <div
      className={`mx-auto max-w-screen-2xl min-h-screen mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400}`}
      style={{backgroundImage: `url(${bg})`,  objectFit: 'cover', content: "", backgroundPosition: "center"}}
    >

      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
