import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search.css";

export default function Search({ getNewInfo }) {
  let [city, setCity] = useState("Arifwala");

  let getInfo = async () => {
    let url = `http://api.weatherapi.com/v1/current.json?key=9742d0f783cb400a9b884244242908&q=${city}&aqi=no`;
    let response = await fetch(url);
    let jsonResponse = await response.json();
    let result = {
      name: jsonResponse.location.name,
      region: jsonResponse.location.region,
      country: jsonResponse.location.country,
      feelslike_c: jsonResponse.current.feelslike_c,
      temp_c: jsonResponse.current.temp_c,
      text: jsonResponse.current.condition.text,
    };
    return result;
  };

  useEffect(() => {
    let getEffectInfo = async () => {
      let result = await getInfo();
      getNewInfo(result);
      setCity("");
    };
    getEffectInfo();
  }, []);

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let onSubmit = async (evt) => {
    evt.preventDefault();
    let result = await getInfo();
    getNewInfo(result);
    setCity("");
  };

  return (
    <div className="Search">
      <h2>Weather App</h2>

      <form onSubmit={onSubmit}>
        <TextField
          id="search"
          label="City"
          variant="outlined"
          className="field"
          size="small"
          onChange={handleChange}
          value={city}
          required
        />
        <br />
        <br />
        <Button type="submit" variant="contained" id="search">
          Search
        </Button>
      </form>
    </div>
  );
}
