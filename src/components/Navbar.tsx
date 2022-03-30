import React from 'react'

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <div className='pl-5 md:pl-10 mb-5 pt-10 backdrop-blur-sm'>
        <a href="/" >
        <div className='border-2 w-[85px] md:w-[110px]'></div>
        <p className='text-lg md:text-2xl'>Weathify</p>
      </a>
    </div>
  )
}

export default Navbar