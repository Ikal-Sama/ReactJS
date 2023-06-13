import React from 'react'
import classNames from 'classnames'
import { FcShop } from "react-icons/fc";
import { AiOutlineLogout } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/conststant/navigation';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';
export default function Sidebar() {
  return (
   
        <div className='bg-gradient-to-t from-cyan-500 to-blue-500 flex flex-col w-60 text-white p-3'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcShop fontSize={24}/>
                <span className='text-neutral-100 text-lg'>FoodLore</span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
              {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
              ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {DASHBOARD_BOTTOM_LINKS.map((item)=> (
                    <div>
                        <SidebarLink key={item.key} item={item} />
                    </div>
                ))}
                
                    <div className={classNames( 'text-red-500 cursor-pointer', linkClasses)}>
                        <span className='text-xl'><AiOutlineLogout /></span>
                        Logout
                    </div>
                
            </div>
        </div>
    
  )
}

function SidebarLink({ item }) {
    const {pathname} = useLocation()

    return (
        <Link to={item.path} className={classNames(
            pathname === item.path ? 'bg-neutral-700 text-white': 'text-neutral-100', linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
