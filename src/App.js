import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TemperatureDetails from "./components/TemperatureDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/weatherService";


function App() {

    const fetchWeather = async () => {
        try{
            const data = await getWeatherData({q: 'London'});
        console.log(data);
        } catch(error) {

        }
        
    }

    fetchWeather();
    

    return (
        <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <TopButtons />
            <Inputs />
            <TimeAndLocation />
            <TemperatureDetails />
            <Forecast title="Hourly Forecast"/>
            <Forecast title="Daily Forecast"/>
        </div>
    );
}

export default App;
