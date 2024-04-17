const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SampleModel = require('./model/Sample');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8005;

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/wathare")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

//Routes
//getting all data from db
app.get("/samples", (req, res) => {
    SampleModel.find({})
    .then(sample => {
        // console.log('Retrieved sample data:', sample);
        res.json(sample);
    })
    .catch((err) => {
        console.error('Error fetching sample data:', err);
        res.status(500).json({ message: 'Internal server error' });
    });
});

//Adding new Sample
app.post("/createSample", (req, res) => {
    SampleModel.create(req.body)
    .then(sample => res.json(sample))
    .catch(err => res.json(err))
})

//third party api for getting the location and api
app.post("/weather", async (req, res) => {
    const { location } = req.body;
    try {
      const apiKey = `29ae6b744673a73836d21385cf7fcc81`;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; // Add units=metric to get temperature in Celsius
      const response = await axios.get(apiUrl);
      
      const { main, weather } = response.data;
      const temperature = main.temp;
      const weatherDescription = weather[0].description;
      
      res.json({ temperature, weatherDescription });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

app.listen(PORT, () => {
    console.log("Server is running!");
});