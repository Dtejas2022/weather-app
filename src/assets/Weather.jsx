import React, { useState } from 'react'
import axios from 'axios';
const Weather = () => {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const fetchWeather  = async () =>{
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'5ec34ada06e541ce28b3e8e1e13b6c1c'}`)
            console.log(response);
            setWeather(response);
        } catch (error) {
            console.log('error fetching weather data', error);
        }
    }

    const handleClick = () => {
        fetchWeather();
    }

  return (
    <>
      <h1 className='text-center text-3xl mt-4'>Wather-app</h1>
      <div className='item-center mx-20px p-[20px] rounded text-center w-full h-auto bg-sky-200 '>
        <input className='bg-white w-full mx-2 p-2' placeholder='Enter city' type="text" value={city} 
        onChange={handleCityChange} />
        <button onClick={handleClick} className='bg-red-500 curser-pointer m-2 p-2 hover:bg-red-700 hover:text-white rounded'>
            Get weather</button>

        {weather && <>
        <div className='mt-20px'>
            <h3>City: {weather.data.name}</h3>
            <p>Temperature: {weather.data.main.temp}</p>
            <p>Description: {weather.data.weather[0].description}</p>
        </div>
        </>}
      </div>
    </>
  )
}

export default Weather
