import SearchBox from "./SearchBox.jsx"
import WeatherBox from "./weatherBox.jsx"
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({city: "mumbai",
    FeelsLike: "40.27",
    MaxTemp: "34.99",
    MinTemp: "33.34",
    Temp: "34.33",
    Weather:"clear sky",
    humidity: "40",});

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
        console.log(weatherInfo)
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Shriram</h1>
            <SearchBox updateInfo={updateInfo}/>
            <WeatherBox info={weatherInfo}/>
        </div>
    )
};