//IMPORTS *
const express = require("express");
const cors = require("cors");

//CREAR SERVIDOR *
const server = express();

//CONFIGURAR SERVIDOR *
server.use(cors());
server.use(express.json());
require("dotenv").config();

//PUERTO *
const PORT = 5001; 
server.listen(PORT, ()=>{
  console.log(`Server listening at http://localhost:${PORT}`);
})

function clearRecord(json){
  return{
    city: json.name, 
    weather: json.weather[0].main,
    temperature: json.main.temp,
    sensation: json.main.feels_like 
  }
}

//ENDPOINTS
server.get('/api/weather/:country/:city', async (req, res) =>{
  const city =  req.params.city.toLowerCase();
  const country = req.params.country.toLowerCase();
  const API_KEY = process.env.WEATHER_API_KEY;

  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&lang=es&APPID=${API_KEY}`);
  const weatherData = await weatherResponse.json();
  const weatherRecord = clearRecord(weatherData);
  return res.json(weatherRecord);
});  




