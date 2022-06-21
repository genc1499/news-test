import axios from 'axios';
import {useEffect} from 'react'
import './App.css';

function App() {
  useEffect (()=>{
    axios ({
      url:`https://api.currentsapi.services/v1/latest-news`,
      
              
      params:{
        apiKey:`WYB2g_IF3u2aTOW2WjDYQeTFuJl84VJ04t4jq7941IFdVNfv`,
        category:'business'
      }
    })
    .then ((response)=>{
      console.log(response.data.news);
    })
    
  }, [])
  return (
  <>
 
  </>
  );
}

export default App;
