
function api() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&lang=es&APPID=${API_KEY}`)
  .then(res => res.json())
  .then((data)=>{
    const newArray = data.map((item) => {
      return{
        city: item.name, 
        weather: item.weather.main,
        temperature: item.main.temp,
        sensation: item.main.feels_like        
      }
    });
    return newArray;
  });
};

export default api;