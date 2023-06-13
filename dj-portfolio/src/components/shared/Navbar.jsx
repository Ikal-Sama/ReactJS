import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Logo from '../../assets/hdj-logo2.webp';

const Navbar = () => {

  return (
    <div className='bg-gray-600 flex justify-between p-5 fixed w-screen'>
        <div>
            <img src={Logo} alt="" width={50}/>
        </div>
        <ul className='flex gap-4 p-4 items-center cursor-pointer'>
            <li>
                <Link to='home' className='hover:bg-sky-500 p-2 rounded-md shadow-sm shadow-neutral-300 hover:text-white'>Home </Link>
            </li>
            <li>
                <Link to='about' className='hover:bg-sky-500 p-2 rounded-md shadow-sm shadow-neutral-300 hover:text-white'>About </Link>
            </li>
            <li>
                <Link to='' className='hover:bg-sky-500 p-2 rounded-md shadow-sm shadow-neutral-300 hover:text-white'>Contact </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar