import React from 'react'
//import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img src={reactLogo} className='w-[50px]' alt="React logo" />

      <Link to='/' className='text-blue-800 text-4xl font-bold'>Home</Link>
      
      <Link to='/watchlist' className='text-blue-800 text-4xl font-bold'>WatchList</Link>
    </div>
  )
}

export default Navbar
