import React, { useState } from 'react';
import axios from 'axios';

function LocationTemperature() {
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8005/weather", { location });
      const { temperature, weatherDescription } = response.data;
      setTemperature(temperature);
      setWeatherDescription(weatherDescription);
      setError('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Get Temperature Details</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p>{error}</p>}
      {temperature !== null && (
        <div>
          <h2>Weather for {location}</h2>
          <p>Temperature: {temperature}°C</p>
          <p>Weather: {weatherDescription}</p>
        </div>
      )}
    </div>
  );
}

export default LocationTemperature;
