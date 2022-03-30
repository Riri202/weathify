import React, { FC} from 'react';
import {FaTimes} from 'react-icons/fa'

export interface FavsListProps {
    favs: string[]
    deleteHandler: (location: string) => void
}

export const FavsList: FC<FavsListProps> = ({favs, deleteHandler}) => {
   
  return (
    <div>
      <div className='flex space-x-5 flex-wrap'>
          { favs.length > 0 ?  favs.map((fav, key)=> {
              return (
                 
                  <div key={key} className='flex flex-row space-x-2 border p-1 pr-2 pl-2 mb-2 border-1 border-stone-50 rounded-xl text-sm md:text-lg'>
                      <p >
                      {fav}
                      </p>
                      <button onClick={() => deleteHandler(fav)}>
                      <FaTimes className='text-red-400'/>
                      </button>
                  </div>
                 
              )
          }) : <p className='text-red-500'>*No favorite cities to display. Add new cities to your favorites list*</p>}
      </div>
    </div>
  );
}

export default FavsList