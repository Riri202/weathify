import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { InputProps } from "../types/types";
import FavsList  from './FavsList';


export  const Input: React.FC<InputProps> = ({setCity, city}) => {
  const [favs, setFavs] = useState(
    [
        'Berlin', // default favorite list that shows on load
        'London',
        'Tokyo'
    ]
)
const [newFav, setNewFav] = useState<string>('')
  
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value)
        setNewFav(event.target.value)
   
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCity(e.currentTarget.value)   

    }
    // search for city weather details
    const searchHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
         setCity(e.currentTarget.value) 
    }
// add new cities to favourite list
const addToFavs = (e: React.MouseEvent<HTMLButtonElement>) => {
  setFavs([...favs, newFav ].sort() )  // return the favorite list sorted in alphabetical order as new cities are added
  
}
// delete cities from the favorites list
const deleteHandler = (location: string) => {
  setFavs(favs.filter(fav => fav !== location)) 
}

    
   

  return (
    <div className='flex flex-col space-y-10 w-[90vw] md:w-[80vw]'>
    <div className=' mb-10 p-2 md:p-0'>
      <p className='text-base md:text-2xl mb-3 font-serif tracking-widest'>Favourites List</p>
      <FavsList favs={favs} deleteHandler={deleteHandler}/>
    </div>
    <div className='flex p-2 md:p-0 flex-col'>
      <form onSubmit={submitHandler} className='flex flex-col space-y-10'>
        <input placeholder='Enter a city name' type='text' value={city} onChange={changeHandler} className=' focus-within:text-stone-200 outline-none bg-transparent border-0 border-b-2 border-b-stone-50 text-sm md:text-lg pl-3 pt-3'/>
        <div className='flex space-x-10'>
          <Link to='/weatherDetails'>
        <button className='p-2 uppercase text-stone-900 bg-stone-50 hover:text-[#fff] hover:bg-transparent hover:ring-1 hover:ring-stone-50 transition-all duration-200 ease-out rounded-sm text-sm md:text-xl' onClick={searchHandler}>get weather details</button>
          </Link>
        <button className='ring-1 ring-stone-50 p-2 uppercase text-sm md:text-xl' onClick={addToFavs}>add to favorites</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Input
