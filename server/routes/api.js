const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const apiEndpoint = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum&timezone=auto';
    
    const response = await axios.get(apiEndpoint);
    const data = response.data;
    
    console.log('Data received from the API:', data);
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from the API' });
  }
});

module.exports = router;

