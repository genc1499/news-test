import axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react';
function App() {
  const [weather,setWeather]= useState(['']);
  useEffect (()=>{
    axios ({
    
            url:`https://api.weatherapi.com/v1/forecast.json`,
            params:{
                key:`76b75a7ececc4d1c86341505222206`,
                q:`Toronto`,
                days:3
            }
          })
      
          .then((response)=>{
          console.log(response.data.forecast.forecastday);
        console.log(response.data.forecast.forecastday.day.avgtemp_c);
      
          
           
          })
        
      },[])
      
  return (
  <>

 <p>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></p>

  </>
  );
}

export default App;
