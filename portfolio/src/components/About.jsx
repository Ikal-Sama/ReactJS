import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen pt-[15rem] bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justift-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600 '>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Daniel Jhon Bancale nice to meet you, Please take a look</p>
                </div>  
                <div>
                    <p>I am inspiring to be an Web developer and i am willing to learn in your company
                        and gain a good experience in web development,
                        I am passionate in learning new things and working with my weakness, And 
                        improve my skills.

                    </p>
                </div>      
            </div>
        </div>
    </div>
  )
}

export default About