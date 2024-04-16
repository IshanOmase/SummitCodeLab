const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const SampleModel = require('./model/Sample')

const app = express();
const PORT = process.env.PORT || 8005;

///app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/wathare")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

//Routes
//getting all data from db
app.get("/samples", (req, res) => {
    SampleModel.find({})
    .then(sample => {
        console.log('Retrieved sample data:', sample);
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


app.listen(PORT, () => {
    console.log("Server is running!");
});