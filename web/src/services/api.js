
function api() {
  return fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=05ba79593c10bfdacae35aea8c3e5e10")
  .then(res => res.json())
  .then((data)=>{
    const newArray = data.map((item) => {
      return{
        //clave: valor del objeto
      }
    });
    return newArray;
  });
};

export default api;