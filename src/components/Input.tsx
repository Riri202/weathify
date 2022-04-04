/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputProps } from "../types/types";
import axios from "axios";
import { Temp, Weather, tempDefault, weatherDefault } from "../types/types";
import WeatherDetails from '../pages/WeatherDetails';






export  const Input: React.FC<InputProps> = () => {

const [tempData, setTempData] = useState<Temp>(tempDefault);
const [weatherData, setWeatherData] = useState<Weather>(weatherDefault);
const [cityName, setCityName] = useState<string>('')
const [temp, setTemp] = useState<number>(0)
const [city, setCity] = useState<string>("");
const [loading, setLoading] = useState(false)
const navigate = useNavigate()
 
  
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCity(event.target.value)    
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCity(e.currentTarget.value)   

    }
    // search for city weather details
    const searchHandler = async () => {
      if (city !== undefined) {
        let response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e002b44efb0f426f0c67533d6ace14bd`
        );
        let result = await response.data;
        setCityName(result.name)
        setTemp(result.main.temp)
        setTempData(result.main);
        setWeatherData(result.weather[0]);
        setLoading(true)
        console.log(result);
      }
      // navigate('/weatherDetails')
    }
    
  

    
   

  return (
    <div className='flex flex-col space-y-10 w-[90vw] md:w-[80vw]'>

    <div className='flex p-2 md:p-0 flex-col'>
      <form onSubmit={submitHandler} className='flex flex-col space-y-10'>
        <input placeholder='Enter a city name' type='text' value={city || ''} onChange={changeHandler} className=' focus-within:text-stone-200 outline-none bg-transparent border-0 border-b-2 border-b-stone-50 text-sm md:text-lg pl-3 pt-3'/>
        <div className='flex space-x-10'>
        <button onClick={searchHandler} className='p-2 uppercase text-stone-900 bg-stone-50 hover:text-[#fff] hover:bg-transparent hover:ring-1 hover:ring-stone-50 transition-all duration-200 ease-out rounded-sm text-sm md:text-xl' >get weather details</button>
        </div>
      </form>
    </div>
    {loading ? <WeatherDetails city={city}  cityName={cityName} tempData={tempData} weatherData={weatherData}/> : null}
    </div>
  );
}

export default Input
