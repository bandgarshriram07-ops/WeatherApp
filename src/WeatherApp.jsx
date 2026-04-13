import SearchBox from "./SearchBox.jsx"
import WeatherBox from "./weatherBox.jsx"
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({city: null,
    FeelsLike: "",
    MaxTemp: "",
    MinTemp: null,
    Temp: null,
    Weather:null,
    humidity: null,});

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