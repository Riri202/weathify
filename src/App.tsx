/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState, FC } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import { Temp, Weather, tempDefault, weatherDefault } from "./types/types";
import axios from "axios";
import WeatherDetails from './pages/WeatherDetails';
import background from './assets/background-home-desktop.jpg'
import Navbar from './components/Navbar';



 const App: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [tempData, setTempData] = useState<Temp>(tempDefault);
  const [weatherData, setWeatherData] = useState<Weather>(weatherDefault);
  const [cityName, setCityName] = useState<string>('')
  const [temp, setTemp] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      if (city !== undefined) {
        let response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e002b44efb0f426f0c67533d6ace14bd`
        );
        let result = await response.data;
        setCityName(result.name)
        setTemp(result.main.temp)
        setTempData(result.main);
        setWeatherData(result.weather[0]);
        console.log(result);
      }
    };
    fetchData();
  }, [city]);

  return (
    <div className="text-[#fff] p-0 m-0 overflow-hidden" style={{ backgroundImage: `url(${background})`, objectFit:'cover', backgroundRepeat: 'repeat'}}>
    <Navbar/>
      <Router>
     <Routes>
       <Route path='/' element={<Home setCity={setCity} temp={temp} setTemp={setTemp} city={city} cityName={cityName} tempData={tempData}/>}/>
       <Route path='/weatherDetails' element={<WeatherDetails city={city}  cityName={cityName} tempData={tempData} weatherData={weatherData} />}/>
     </Routes>
      </Router>
    </div>
  );
};

export default App;
