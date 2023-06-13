import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-5 pt-[8rem]'>
            <form method="POST" action="https://getform.io/f/22da7cd3-2acb-46eb-a522-696e13ac6f8a"
            className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>/Submit the form below or send me an Email</p>
    
                </div>
                <input type="text" name="name" className='bg-[#d8bcac] p-2 mb-4' placeholder='Enter name...' required/>
                <input type="email" name="email" className='bg-[#d8bcac] p-2 mb-4' placeholder='Enter email...' required/>
                <textarea name="message" rows="10" className=' bg-[#d8bcac] p-2' placeholder='Enter message here...' required></textarea>
                <button type="submit" className='text-white border-2 hover:bg-orange-500 mx-auto flex items-center my-4 py-2 px-3 hover:rounded-full'>SEND</button>
            </form>
    </div>
  )
}

export default Contact;