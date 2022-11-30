
import './current.css'


const Currentweather = ({searchedsurrentday}) => {



  
  return (
    <div className='currentforecast' >
        <div className='currentday' >
          <h1>Today</h1>
          <h1>{searchedsurrentday.avgTempF} &deg; F</h1>
        </div>
        <div className='currentImg'>
       
        <p>Weather: {searchedsurrentday.weather}</p>
        </div>

        <div className='curentConditions' >
         
        <p>HUMIDITY: {searchedsurrentday.humidity}</p>
          <p>WIND: {searchedsurrentday.windDIR} at kph {searchedsurrentday.windSpeedKPH} </p>
          <p>PRESSUREIN {searchedsurrentday.pressureIN} </p>
          <p>FEELS LIKE:{searchedsurrentday.avgFeelslikeC} &deg;c</p>
          
        </div>
      
    </div>
  )
}

export default Currentweather
