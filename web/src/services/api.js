
function api() {
  return fetch("")
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