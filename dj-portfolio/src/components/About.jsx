import React from 'react'
import Dj from '../assets/Dj.jpg';

import { CiUser,
    CiLocationOn,
    CiMail,CiMobile4,
    CiPen } from 'react-icons/ci';


const About = () => {
    
  return (
    <div name="about" className=' bg-slate-900'>
        <div className=''>
            <h1 className='text-2xl mb-6 text-center underline text-sky-300'>ABOUT ME</h1> 
        </div>
        <div className='flex gap-6'>
            <div className='flex-1 m-11 '>
                 <img src={Dj} alt="" width={500} className="rounded-md shadow-md shadow-sky-200"/>
            </div>

            <div className='flex-2 mt-12'>
                 
                    <div className='flex gap-3 mb-3'>
                        <div className='flex gap-2 shadow-sm p-3 shadow-sky-200 hover:bg-sky-100'>
                            <CiUser fontSize={25} className='text-sky-400'/>
                            <h1 className='text-md text-gray-300 hover:text-black'>Daniel Jhon Bancale</h1>
                        </div>

                         <div className='flex gap-2 shadow-sm p-3 shadow-sky-200 hover:bg-sky-100'>
                            <CiLocationOn fontSize={25} className='text-sky-400'/> 
                            <span className='text-center text-gray-400'>Address: </span>
                            <h1 className='text-md text-gray-300 hover:text-black'>Day-as, Cordova, Cebu</h1>
                        </div>

                        <div className='flex gap-2 shadow-sm p-3 shadow-sky-200 hover:bg-sky-100'>
                            <CiMail fontSize={25} className='text-sky-400 font-light'/> 
                            <span className='text-center text-gray-400'>Email: </span>
                            <h1 className='text-md text-gray-300 hover:text-black'>bancale146@gmail.com</h1>
                        </div>
                        
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <div className='flex gap-2 shadow-sm p-3 shadow-sky-200 hover:bg-sky-100'>
                             <CiMobile4 fontSize={25} className='text-sky-400 font-light'/> 
                            <span className='text-neutral-400'>Contact#: </span>
                            <h1 className='text-md text-gray-300 hover:text-black'>09357237298</h1>
                        </div>

                        <div className='flex gap-2 shadow-sm p-3 shadow-sky-200 hover:bg-sky-100'>
                            <CiPen fontSize={25} className='text-sky-400 font-light'/> 
                            <span className='text-center text-gray-400'>College: </span>
                            <h1 className='text-md text-gray-300 hover:text-black'>Cordova Public College</h1>
                        </div>
                    </div>

                <div className='flex gap-3 mt-5 '>
                    <span className='text-2xl text-sky-300 underline'>Hobies</span>
                </div>
                <div className='flex gap-3 mt-5'>
                        <div className='flex gap-2 shadow-sm p-3 shadow-sky-200 hover:bg-sky-100'>
                             <CiMobile4 fontSize={25} className='text-sky-400 font-light'/> 
                            <span className='text-neutral-400'>Contact#: </span>
                            <h1 className='text-md text-gray-300 hover:text-black'>09357237298</h1>
                        </div>

                        <div className='flex gap-2 shadow-sm p-3 shadow-sky-200 hover:bg-sky-100'>
                            <CiPen fontSize={25} className='text-sky-400 font-light'/> 
                            <span className='text-center text-gray-400'>College: </span>
                            <h1 className='text-md text-gray-300 hover:text-black'>Cordova Public College</h1>
                        </div>
                    </div>
                 
            </div>
        </div>
    </div>
  )
}

export default About