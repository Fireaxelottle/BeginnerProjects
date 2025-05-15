import React from 'react'
import Ham from '../images/PngItem_302578.png' 

const Navbar = () => {
  return (
    <nav className='flex py-4 px-8 bg-slate-300 gap-8 text-gray-800'>
        <img src={Ham} alt=""  className='w-10 h-10'/>
        <h1 className='text-3xl font-bold'>Image FInder App</h1>
    </nav>
  )
}

export default Navbar
