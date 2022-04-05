import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { LargestCitiesProps,} from "../types/types";
import FavsList  from './FavsList';
import  fetchData  from '../helpers/fetchData';




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
            'Ibadan',
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
    const [favs, setFavs] = useState<string[]>([])
    const [weather, setWeather] = useState<{}[]>([])


        // add new cities to favourite list
const addToFavs = (location: string) => {
    setFavs([...favs, location].sort())  // return the favorite list sorted in alphabetical order as new cities are added
    setCities(cities.filter(place => place !== location)) //remove cities from default list when added to fav list
    
  }
  // delete cities from the favorites list
  const deleteHandler = (location: string) => {
    setFavs(favs.filter(fav => fav !== location))
    setCities([...cities, location].sort()) // add city back to default list when removed from fav list
  }
   
   
    // delete cities on the default list
    const deleteCities = (location: string) => {
        setCities(cities.filter(city => city !== location))        
    }

    // weather details for default cities
    const getWeather = (city: string) => {
        setCity(city)
    } 

    //display temperature of default cities   
    // useEffect(() => {
    //     const data = cities.map(async (city) => {
    //         const temperature = await fetchData(city);
    //          console.log(city, weather)
    //         // console.log(temperature)
    //         return ({
    //             city,
    //             temperature
    //         })
    //     })
    //     Promise.all(data).then(result => setWeather(result.map(location => {
    //             return (location.temperature)             
    //     })))
       // eslint-disable-next-line react-hooks/exhaustive-deps
    //  }, [cities])

    useEffect(() => {
      cities.forEach( async (element) => {
            const report = await fetchData(element);
            // setWeather(current => ({
            //     ...current, report
            // }))
            // report.forEach((res) => weather.push(res))
           setWeather(report) 
           console.log(weather)           
        })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cities])


    // useEffect(() => {
    //     const data = cities.map(async (city) => {
    //         const temperature = await fetchData(city);
    //         setWeather(temperature)
    //          console.log(city, weather)
           
    //     })
    //     Promise.all(data).then(result => setWeather(result))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [cities])


   
  return (
    <div>
         <p className='text-xl md:text-3xl font-serif font-bold mb-5 tracking-widest'>Weather Around The World</p>
         <div className=' mb-10 p-2 md:p-0'>
      <p className='text-base md:text-2xl mb-3 font-serif tracking-widest'>Favourites List</p>
      <FavsList favs={favs} deleteHandler={deleteHandler}/>
    </div>
        <ul className='flex flex-col w-[90vw] md:w-[80vw]'>
            {cities && cities.map((city, key) => {
                return (
                <li key={key} className='flex mb-3 pt-4 pb-4 pl-3 pr-3 mr-3 flex-row justify-between items-start space-x-12 w-auto rounded-sm cursor-pointer bg-stone-50 brightness-200 opacity-60 hover:opacity-100 active:opacity-100 focus:opacity-100 transition-all ease-in-out duration-150'>
                    <div className='flex flex-col space-y-4'>
                        <Link to='/weatherDetails'>
                        <button className='text-xl text-stone-900  border-b-2 border-b-stone-900 font-bold uppercase' onClick={() => getWeather(city)}>
                        {city}
                        </button>
                        </Link>
                        {/* <button onClick={() => showCityTemp(city)} className='text-stone-900 ml-4'><FaAngleDown/></button> */}
                        <button className='ring-red-600 font-bold text-red-900 ring-2 rounded-md p-1 uppercase text-sm' onClick={() => addToFavs(city)}>add to favorites</button>
                          
                        {/* {city === cityName ?  <p className='text-red-900 text-xl md:text-3xl mt-3'>{temp} ºC</p> : null} */}
                    </div>
                        <p className='text-red-900 text-xl md:text-3xl mt-3'>{weather}ºC</p>
                        <button onClick={() => deleteCities(city)}><FaTimes className='text-red-600 font-bold'/></button>
                </li>
                )
            })}
        </ul>
    </div>
  );
}

export default LargestCities;


  