import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";

export default function SearchBox() {
  let [city, setCity] = useState("mumbai");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "017ee5245fc0b30ffd9f719f4d9468e7";

  let getWeather = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
        Temp : jsonResponse.main.temp,
        MaxTemp :jsonResponse.main.temp_max,
        MinTemp :jsonResponse.main.temp_min,
        FeelsLike :jsonResponse.main.feels_like,
        humidity :jsonResponse.main.humidity,
        Whether :jsonResponse.weather[0].description
    }
    console.log(result)
  }
  let handelChange = (event) => {
     setCity(event.target.value);
  };

  let handelSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("")
    getWeather();
  }
  return (
    <div className="searchbox">
      <h2>Search for a Weather</h2>
      <form onSubmit={handelSubmit}>
        <TextField  id="city" label="city name" variant="outlined" onChange={handelChange}  value={city}/>
        <br /><br />
        <Button variant="contained"  type="submit">Search</Button>
      </form>
    </div>
  );
}
