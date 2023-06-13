import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logoDJ.png';
import {Link} from 'react-scroll';

export const Navbar = () => {
     const [nav, setNav] = useState(false);
     const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]
    text-gray-300'> 
        <div>
            <img src={Logo} alt="logoimage" style={{width: '50px'}} className='bg-orange-500 rounded-full'/>
        </div>
        {/* Menu */}
      
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home"  smooth={true} duration={500} className="hover:shadow-md hover:shadow-orange-500  py-2 px-2 rounded-md" >
                         Home
                    </Link>
                </li>
                <li>
                    <Link to="about"  smooth={true} duration={500} className="hover:shadow-md hover:shadow-orange-500  py-2 px-2 rounded-md" >
                            About
                    </Link>
                </li>
                <li>
                    <Link to="skills"  smooth={true} duration={500} className="hover:shadow-md hover:shadow-orange-500  py-2 px-2 rounded-md" >
                         Skills
                    </Link>
                </li>
                <li>
                    <Link to="contact"  smooth={true} duration={500} className="hover:shadow-md hover:shadow-orange-500  py-2 px-2 rounded-md" >
                         Contact
                    </Link>
                </li>
            </ul>
    
        
        {/* hambeuger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            { !nav ? <FaBars/> : <FaTimes/>}
        </div>
        { /* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home"  smooth={true} duration={500} className="hover:shadow-md hover:shadow-orange-500  py-2 px-8 rounded-md"  >
                        Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about"  smooth={true} duration={500} className="hover:shadow-md hover:shadow-orange-500  py-2 px-8 rounded-md">
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills"  smooth={true} duration={500} className="hover:shadow-md hover:shadow-orange-500  py-2 px-8 rounded-md">
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact"  smooth={true} duration={500} className="hover:shadow-md hover:shadow-orange-500  py-2 px-8 rounded-md">
                    Contact
                </Link>
            </li>
        </ul>

        {/** Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between
                items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between
                items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between
                items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EC7149]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between
                items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}
export default Navbar;