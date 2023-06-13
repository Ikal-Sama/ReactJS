import React from 'react'
import { GiChart } from "react-icons/gi";
import { HiTrendingUp, HiTrendingDown,
  HiChartBar } from "react-icons/hi";


// import { DASHBOARD_ITEMS } from '../lib/conststant/DashboardGridList'

export default function DashboardStatsGrid() {
  return (
    <div className='flex gap-4 w-full '>
        <CardWrapper className=''>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
            <GiChart fontSize={24} className='text-white text-2xl'/>
          </div>
          <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Total Earnings</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-500 font-semibold'>$30200.20</strong>
              <span className='text-sm text-sky-500 pl-1'>+240</span>
            </div>
          </div>
        </CardWrapper>
        <CardWrapper className=''>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-500'>
            <HiTrendingDown fontSize={24} className='text-white text-2xl'/>
          </div>
          <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Page Views</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-500 font-semibold'>290</strong>
              <span className='text-sm text-red-500 pl-1'>+20</span>
            </div>
          </div>
        </CardWrapper>
        <CardWrapper className=''>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-400'>
            <HiTrendingUp fontSize={24} className='text-white text-2xl'/>
          </div>
          <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Total Users</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-500 font-semibold'>590</strong>
              <span className='text-sm text-green-500 pl-1'>+30</span>
            </div>
          </div>
        </CardWrapper>
        <CardWrapper className=''>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-pink-500'>
            <HiChartBar fontSize={24} className='text-white text-2xl'/>
          </div>
          <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Total Orders</span>
            <div className='flex items-center'>
              <strong className='text-xl text-gray-500 font-semibold'>10,000</strong>
              <span className='text-sm text-pink-500 pl-1'>+210</span>
            </div>
          </div>
        </CardWrapper>
    </div>
    
  )
}

function CardWrapper({children}) {
  return <div className='bg-white rounded-md shadow-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
  
}