const axios = require("axios")
 async function getForecast(req, res) {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true`; // URL for the API request
  
      const response = await axios.get(url); // Making a GET request to the API
      const jsonData = response.data; // Extracting the response data
      res.json(jsonData); // Sending the response data as JSON
    } catch (error) {
      console.log('Error:', error); // Logging the error
      res.status(500).json({ error: 'Internal server error', message: error.message }); // Sending an error response with status code 500
    }
  };
  module.exports = {getForecast}