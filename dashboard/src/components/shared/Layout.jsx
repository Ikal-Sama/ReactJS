  import React from 'react'
  import { Outlet } from 'react-router-dom'
  import Header from './Header'
  import Sidebar from './Sidebar'
  export default function Layout () {
    return (
      <div className='flex flex-row bg-neutral-100 max-h-full w-screen '>
            <Sidebar />
          <div className='flex-1'>
              <Header />  
              <div className='p-4'>
                {<Outlet />}
              </div>
          </div>
      </div>
    )
  }
