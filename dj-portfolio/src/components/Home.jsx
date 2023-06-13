import React from 'react'

const Home = () => {
  return (
    <div name="home" className='bg-slate-900 p-8 h-screen'>
        <div className='p-20 mt-20'>
            <span className='text-white text-2xl underline text-sky-300'>Hi i am,</span>
            <h1 className='text-4xl font-bold text-neutral-500 hover:text-sky-500'>Daniel Jhon Bancale</h1>
            <p className='text-neutral-300 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                 electronic typesetting, remaining essentially unchanged. It was popularised 
                 in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including 
                  versions of Lorem Ipsum</p>
        </div>
       
    </div>
  )
}

export default Home