import React, { useEffect, useState } from "react";
import axios from "axios";
import './WeatherApp.css'

const WeatherApp = () => {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);

  const API_KEY = "1e49d73b8bf14716bfd73623262201";

  useEffect(() => {
    weatherApi();
  }, [city]);

  async function weatherApi() {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      console.log(response.data)
      setWeather(response.data); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <> 
    <div className="weather">
        <h1 className="appname">Weather App</h1>

        <input className="input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        <button className="button">Get</button>

        

        {weather && (
            <div className="data">
                <h3 className="cityname">City Name: {weather.location.name}</h3>
                <h3 className="temperature">Temperature: {weather.current.temp_c}°C</h3>
                <h3 className="condition">Condition: {weather.current.condition.text}</h3>
            </div>
        )}
    </div>
    </>
  );
};

export default WeatherApp;
