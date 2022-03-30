import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { LargestCitiesProps } from "../types/types";



export const  LargestCities: React.FC<LargestCitiesProps> = ({setCity, tempData, setTemp, temp, cityName}) => {
    const [cities, setCities] = useState(
        [
            'Beijing',
            'Buenos Aires',
            'Cairo',
            'Calcutta',
            'Chongqing',
            'Dhaka',
            'Delhi',
            'Guangzhou',
            'Instabul',
            'Karachi',
            'Lagos',
            'Manila',
            'Mexico City',
            'Mumbai',
            'New York',
            'Osaka',
            'Rio de Janeiro',
            'Sao Paulo',
            'Shanghai',
            'Tokyo',
        
            
        ]
    )
   
   
    // delete cities on the default list
    const deleteCities = (location: string) => {
        setCities(cities.filter(city => city !== location))        
    }
    // weather details for default cities
    const getWeather = (city: string) => {
        setCity(city)
    } 
    //display temperature of default cities   
     const showCityTemp = (location: string) => {
         setCity(location)
         setTemp(temp)
         return temp
       }


   
  return (
    <div>
         <p className='text-xl md:text-3xl font-serif font-bold mb-5 tracking-widest'>Weather Around The World</p>
        <div className='flex flex-col md:flex-row md:flex-wrap w-[80vw] md:w-auto'>
            {cities && cities.map((city, key) => {
                return (
                <div key={key} className='flex mb-3 pt-4 pb-4 pl-3 pr-3 mr-3 flex-row justify-between items-start space-x-5 w-auto rounded-sm cursor-pointer bg-stone-50 opacity-60 brightness-200 hover:opacity-100 active:opacity-100 focus:opacity-100 transition-all ease-in-out duration-150'>
                    <div className=''>
                        <Link to='/weatherDetails'>
                        <button className='text-xl text-stone-900  border-b-2 border-b-stone-900 font-bold uppercase' onClick={() => getWeather(city)}>
                        {city}
                        </button>
                        </Link>
                        <button onClick={() => showCityTemp(city)} className='text-red-900 ml-4'><FaAngleDown/></button>
                        {city === cityName ?  <p className='text-red-900 text-xl md:text-3xl mt-3'>{temp} ºC</p> : null}
                    </div>
                        <button onClick={() => deleteCities(city)}><FaTimes className='text-red-500 font-bold'/></button>
                </div>
                )
            })}
        </div>
    </div>
  );
}

export default LargestCities;


