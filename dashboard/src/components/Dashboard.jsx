import React from 'react'
// import { Link } from 'react-router-dom'
import DashboardStatsGrid from './DashboardStatsGrid'
import PopularProducts from './PopularProducts'
import RecentOrders from './RecentOrders'
import TransactionChart from './TransactionChart'
import UsersChart from './UsersChart'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid />
      <div className='flex flex-row gap-4 w-full'>
        <TransactionChart />
        <UsersChart />
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <RecentOrders />
        <PopularProducts />
      </div>
      
    </div>
  )
}
