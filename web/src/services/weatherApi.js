import {useEffect, useState} from 'react';

function weatherApi(country, city) {

  useEffect(() => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
      try{
        const res = await fetch(`http://localhost:5001/api/weather/${country}/${city}`);
        const dataJson = await res.json();

        setData(dataJson);
        
      } catch (error){
        setError(error.toString());
      }
    } 

  fetchData()},[country, city]);

  return {data, error};
  
};

export default weatherApi;