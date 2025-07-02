import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const apiKey = 'd0d04ec6bf5edc955f820a351524f102'; // Replace with your key

  async function getWeather() {
    if (!city) {
      alert('Please enter a city name');  // alert the user
      return;  // exit early
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert(data.message);  // show error from API (like city not found)
        setWeather(null);
      }
    } catch (error) {
      alert('Failed to fetch weather data');
      setWeather(null);
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => 
            {
                console.log(e.target.value)
            setCity(e.target.value);
        }
    }
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && weather.main ? (
        <div style={{ marginTop: '20px' }}>
          <h2>
            {weather.name} <sup>({weather.sys.country})</sup>
          </h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p style={{ marginTop: '20px' }}>No weather data yet. Please enter a city.</p>
      )}
    </div>
  );
}

export default WeatherApp;
