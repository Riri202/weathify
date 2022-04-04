import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { WeatherDetailsProps } from "../types/types";





export const WeatherDetails: React.FC<WeatherDetailsProps> = ({tempData, weatherData, city, cityName}) => {
  const [notes, setNotes] = useState<string[]>([])
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [newNote, setNewNote] = useState<string>('')

  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewNote(event.target.value)
  }
  // add new notes
  const addNewNote = () => {
    newNote.split('').length > 0 ?
      setNotes([...notes, newNote]) : alert('Oops! You cannot add blank notes. Please type in the text area to add to a new note')  
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewNote(e.currentTarget.value)   
}
// delete notes 
const handleDelete = (message: string) => {
    setNotes(notes.filter(note => note !== message))
}


  
  return (
      <div className='p-5 md:p-10 flex flex-col-reverse md:flex-row md:justify-between  backdrop-blur-sm'> 
      <div className='w-auto md:w-1/2'>
      <div className=' md:p-20 w-auto'>
          {/* <h1>{tempData.temp}</h1> */}
          <form onSubmit={handleSubmit} className='flex flex-col space-y-10 pt-10 pb-10 md:pb-0 md:pt-0'>
            <textarea  placeholder='Enter Notes' onChange={handleChange} className=' focus-within:text-stone-200 outline-none bg-transparent border-0 border-b-2 border-b-stone-50 text-sm md:text-lg pl-3 pt-3'>
            </textarea>
            <button onClick={addNewNote} className='p-2 uppercase text-stone-900 bg-stone-50 hover:text-[#fff] hover:bg-transparent hover:ring-1 hover:ring-stone-50 transition-all duration-200 ease-out  rounded-sm text-sm md:text-xl'>Add New Note</button>
          </form>
      </div>
      <div className='md:p-20'>
          {notes.length > 0 ? notes.map((note, key) => {
        return (
          <div key={key} className='flex flex-row justify-between items-start space-x-5 mb-3 rounded-sm cursor-pointer p-4 bg-stone-50 opacity-50 hover:opacity-80 brightness-200'>
          <p  className='text-base md:text-xl text-stone-900 font-bold'>{note}</p>
          <button onClick={() => handleDelete(note)}><FaTimes className='text-red-500'/></button>
        </div>
        )
          }): <p className='text-red-500'>*No notes to display. Add new notes to your list*</p>}
      </div>
      </div>

      <div className='md:p-20 w-auto md:w-1/2 flex flex-col space-y-8'>

        <div className='flex flex-col space-y-3 justify-center items-center'>
          <h1 className='text-stone-100 text-4xl md:text-8xl font-serif tracking-wider font-bold'>{cityName}</h1>
          <p className='text-sm md:text-lg'> {tempData.humidity}% humidity</p>
        </div>

        <div className='flex flex-row justify-between space-x-4'>
          <div className='flex flex-col space-y-1'>
            <p className='text-4xl md:text-8xl font-bold'>{tempData.temp}</p>
            <p className='text-3xl md:text-5xl'>deg Celsius</p>
          </div>
          <div className='flex flex-col space-y-2'>
            <img src={weatherData.icon !== undefined ? `http://openweathermap.org/img/wn/${weatherData.icon}.png` : undefined} alt="weather-desc-icon" className='w-14 h-14 md:w-16 md:h-16 bg-stone-300 rounded-lg'/>
            <p className='text-sm md:text-base uppercase'>{weatherData.description}</p>
          </div>
        </div>
        <div>
          <p className='text-xl md:text-3xl font-serif font-bold mb-5 tracking-widest'>Weather Details</p>
          <div className='flex flex-col space-y-3'>
            <div className='flex flex-row justify-between text-xl'>
              <p className='text-sm md:text-base'>Feels like</p>
              <p className='text-sm md:text-base'>{tempData.feels_like} º C</p>
            </div>
            <div className='flex flex-row justify-between text-xl'>
              <p className='text-sm md:text-base'>Max temp</p>
              <p className='text-sm md:text-base'>{tempData.temp_max} º C</p>
            </div>
            <div className='flex flex-row justify-between text-xl'>
              <p className='text-sm md:text-base'>Min temp</p>
              <p className='text-sm md:text-base'>{tempData.temp_min} º C</p>
            </div>
          </div>
        </div>

      </div>



      </div>

  )
}

export default WeatherDetails