import axios from 'axios';
import './App.css';

function App() {
  useEffect (()=>{
    axios ({
    
            url:`http://api.weatherapi.com/v1/forecast.json`,
            params:{
                key:`76b75a7ececc4d1c86341505222206`,
                q:`Toronto`,
                days:'5'
            }
          })
      
          .then((response)=>{
          console.log(response.data.forecast.forecastday);
      
          
           
          })
         .catch(error => {
            console.log(error.response.data.error)
         })
        
      },[])
      
  return (
  <>
 
  </>
  );
}

export default App;
