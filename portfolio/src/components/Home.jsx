import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
//     const data = [{
//         id: 1,
//         name: "Daniel",
//         lastname: "Bancale",
//     },
//     {
//         id: 2,
//         name: "Rolando",
//         lastname: "Bonganciso",
//     },
//     {
//         id: 3,
//         name: "Hans",
//         lastname: "Asumo",
//     }

// ]
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

        {/** Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FF6B00]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#EFEFEF]'>Daniel Jhon Bancale</h1>
            <h3 className='text-4xl sm:text-7xl font-bold text-[#ADADAD]'>I am soon to becoming a FrontEnd Developer.</h3>
            <p className='text-[#ADADAD] py-4 max-w-[780px]'>I am inspiring to become a frontend developer and i will also want 
                to learn backend development, currently i am focusing on frontend development
            </p>
            <div>
                <button className='group text-white border-2 px-6 py-4 my-2 flex items-center
                hover:bg-orange-600 hover:border-orange-600'>View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
        {/* {data.map((item) => (
            <>
                <h1>{item.name}</h1>
                <h2>{item.lastname}</h2>
            </>
        ))} */}
    </div>
  )
}

export default Home