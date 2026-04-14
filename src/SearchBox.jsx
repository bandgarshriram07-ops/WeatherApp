import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("mumbai");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "017ee5245fc0b30ffd9f719f4d9468e7";

  let getWeather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        Temp: jsonResponse.main.temp,
        MaxTemp: jsonResponse.main.temp_max,
        MinTemp: jsonResponse.main.temp_min,
        FeelsLike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        Weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handelChange = (event) => {
    setCity(event.target.value);
  };

  let handelSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false);
      console.log(city);
      setCity("");
      let newInfo = await getWeather();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchbox">
      <form onSubmit={handelSubmit}>
        <TextField
          id="city"
          label="city name"
          variant="outlined"
          onChange={handelChange}
          value={city}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists</p>}
      </form>
    </div>
  );
}
