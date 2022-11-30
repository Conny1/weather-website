import { useEffect, useState } from 'react';
import './App.css';
import Currentweather from './components/Currentweather';
import { FetchData } from './components/FetchData';
import format from 'date-fns/format';


const days = ["Saturday", "Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday"];
const   url = 'https://aerisweather1.p.rapidapi.com/forecasts/cairo,eg';

const updatedate = new Date()


function App() {
  const [ forecast, setforecast ] = useState([]);
  const [day, setdays] = useState(0);
  const [searchVal, setsearchVal] = useState('');
  const [searchword, setsaerchword] = useState('')
  const url2 = `https://aerisweather1.p.rapidapi.com/forecasts/${searchVal}`;

  



  // getData
  const GetForcast = async ()=>{
    // setsaerch(!search)
    const data = await FetchData(url)
    
    setforecast(data.data.response[0])

  }
  useEffect(()=>{
    
    GetForcast()

  }, [],[searchword])



  // onclick to search
  const  SearchForecast= async ()=>{
    setsaerchword(searchVal);
    const val = searchVal.split(",")
      // confirm search format
    if (val.length !==2){
      GetForcast()
      alert("Enter the specified format, (city, country eg, Nairobi, Kenya)")
     
    }else{
      const data = await FetchData(url2)
    setforecast(data.data.response[0])

    }

    
    
  }
  
 
  

  
  return (
    <div className="App">
      {/* seven day weather tab */}
      <div className='sevendatweather' >
        <div className='city' >
          <h1>{forecast.place?.name}</h1>
          {/* search tab */}
          <div className='search' ><input 
          type= 'text' placeholder='search format:city, country'
          value={searchVal}
          onChange={(e)=>{setsearchVal(e.target.value)}}
           />
          <button onClick={SearchForecast} >search</button></div>
        
          <h1>{forecast?.periods?.[day].avgTempF } &deg; F</h1>

          
        </div>

        <div className='image'>
        <img src="https://images.unsplash.com/photo-1483702721041-b23de737a886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3VkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="weather"/>
        
          <p>weather: {forecast.periods?.[day].weather}</p>
         
          </div>
          

        <div className='conditions' >
          <div className='conditions1' >
          <p>HUMIDITY: {forecast.periods?.[day].humidity}</p>
          <p>WIND: {forecast.periods?.[day].windDIR} at kph {forecast.periods?.[day].windSpeedKPH} </p>
          <p>PRESSUREIN {forecast.periods?.[day].pressureIN} </p>
          <p>FEELS LIKE:{forecast.periods?.[day].avgFeelslikeC} &deg;c</p>
          </div>
<div className='days' >
          {
            days.map((day, index)=>{
              return <div key={index} className="day" > 
              <button onClick={()=>{setdays(index)}} >{day}</button>
              
              </div>
            })
          }  </div>

          <div className='time' >
            <p>updtated on { format(updatedate, "MMM-dd-yyyy 'at' h:mm a")} </p>
          </div>
          
        </div>
      </div> 
      <div className='currentDay'>
        <Currentweather searchedsurrentday={forecast.periods?.[0]} />          
        </div>

     
      
    </div>
  );
}

export default App;
