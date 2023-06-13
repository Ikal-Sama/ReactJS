import React from 'react'
import reactjs from '../assets/Reactjs.png';
import css from '../assets/css-logo.png';
import html from '../assets/html-logo.png';
import javascript from '../assets/javascript-logo.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4
                 border-orange-600 '>Skills</p>
                <p className='py-4'>// These are the technologies i studied so far.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#191F50] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={reactjs} alt='html' />
                    <p className='my-4'>REACTJS</p>
                </div>

                <div className='shadow-md shadow-[#191F50] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt='html' />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#191F50] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt='html' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#191F50] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt='html' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

        
            </div>
        </div>

    </div>
  )
}

export default Skills