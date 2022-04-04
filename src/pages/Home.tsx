import * as React from 'react';
import Input from '../components/Input';
import LargestCities from '../components/LargestCities';
import { HomeProps } from "../types/types";



export const Home: React.FC<HomeProps> = ({setCity, city, tempData, cityName, setTemp, temp}) => {
  return (
    <div className='md:p-10 backdrop-blur-sm h-[500vh] md:h-[450vh]'>
      <div className='flex flex-col space-y-20 items-center'>

      <div className='flex flex-row w-auto mt-10 md:mb-0'>
     <Input setCity={setCity} city={city}/>
      </div>

      <div className='p-8 md:pt-10 flex flex-row'>
     <LargestCities tempData={tempData} cityName={cityName} setTemp={setTemp} temp={temp} setCity={setCity}/>
      </div>

      </div>     
    </div>
  );
}




export default Home;
