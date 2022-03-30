import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
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
   
   
// let m = cities.map(city => city)
    // delete cities on the default list
    const deleteCities = (location: string) => {
        setCities(cities.filter(city => city !== location))        
    }
    // weather details for default cities
    const getWeather = (city: string) => {
        setCity(city)
    }
    // const showCityTemp = (e: SyntheticEvent<HTMLParagraphElement>) => {
    //     setCity(city)
    // }
     const showCityTemp = (location: string) => {
         setCity(location)
         setTemp(temp)
         return temp
        //  if (location === cityName) {
        //      setTemp(temp)
        //      return temp
        //  } else {
        //      alert('No temp available')
        //  }
       }

    // useEffect(() => {
    //    setCity(city)
    // })
   
  return (
    <div>
        <div className='flex flex-col md:flex-row md:flex-wrap w-[80vw] md:w-auto'>
            {cities && cities.map((city, key) => {
                return (
                <div key={key} className='flex mb-3 pt-4 pb-4 pl-3 pr-3 mr-3 flex-row justify-between items-start space-x-5 w-auto rounded-sm cursor-pointer bg-stone-50 opacity-60 brightness-200 hover:opacity-100 transition-all ease-in-out duration-150'>
                    <div className=''>
                        <Link to='/weatherDetails'>
                        <button className='text-xl text-stone-900  border-b-2 border-b-stone-900 font-bold uppercase' onClick={() => getWeather(city)}>
                        {city}
                        </button>
                        </Link>
                        <button onClick={() => showCityTemp(city)} className='text-red-900'>{tempData.temp} show temp</button>
                         <p className='text-red-900'>{temp} deg Celsius</p>

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


