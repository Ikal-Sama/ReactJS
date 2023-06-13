import React from 'react'
import { HiOutlineSearch, HiOutlineChat,
  HiOutlineBell, HiUserCircle,
  HiOutlineCog, HiLogout,
 } from 'react-icons/hi';
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';



// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className='bg-white h-16 px-8 flex justify-between items-center drop-shadow-md '>
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
           <div>
            <input type="text" placeholder='Search here...' className=' focus:outline-none active:outline-none rounded-lg h-10
             border-2 pl-11 pr-4' />
           </div>
        </div>
        <div className='flex items-center gap-2 mr-2 '>
        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(open && "bg-cyan-100 rounded-full","p-1.5 hover:rounded-full inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none hover:bg-none ")}>
            
            <HiOutlineChat fontSize={24} className='hover:shadow-cyan-200 hover:shadow-md hover:rounded-lg'/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2.5  w-80">
                <div className='bg-cyan-100 shadow-md px-2 py-2.5 rounded-md ring-1 ring-black ring-opacity-5 '>
                  <strong className='tex-gray-700 font-medium'>Messages</strong>
                  <div className='mt-2 py-1 text-sm'>
                    This is message panel.
                  </div>
                </div>
                </Popover.Panel>
              </Transition>
            </>
        )}
        </Popover>

        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(open && "bg-cyan-100 rounded-full","p-1.5 hover:rounded-full inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none hover:bg-none ")}>
            
            <HiOutlineBell fontSize={24} className='hover:shadow-cyan-200 hover:shadow-md hover:rounded-full'/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2.5  w-80">
                <div className='bg-cyan-100 shadow-md px-2 py-2.5 rounded-md ring-1 ring-black ring-opacity-5 '>
                  <strong className='tex-gray-700 font-medium'>Notifications</strong>
                  <div className='mt-2 py-1 text-sm'>
                    This is notifications panel.
                  </div>
                </div>
                </Popover.Panel>
              </Transition>
            </>
        )}
        </Popover>
        <Menu as="div" className="relative">
        <div className='inline-flex'>
          <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className='sr-only'>Open user menu</span>
              <div className='w-10 h-10 rounded-full bg-sky-500 bg-cover bg-center bg-no-repeat'
              style={{backgroundImage: 'url("https://source.unsplash.com/80x80?face")'}}>
                <span className='sr-only'>Robert Downy</span>
              </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 ring-black rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none ">
            
              <Menu.Item>
                {({ active }) => (
                <div className={classNames(active && 'bg-cyan-200',
                'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')}
                 onClick={() => navigate('/profile')}
                 ><p className='ml-6'>Your Profile</p> <HiUserCircle fontSize={24}
                  className="absolute left-[1rem] top-3 text-gray-500"/>
                 
                 </div>)}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                <div className={classNames(active && 'bg-cyan-200',
                'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')}
                 onClick={() => navigate('/profile')}
                 >
                 <p className='ml-6'> Settings</p> <HiOutlineCog fontSize={24} 
                 className="absolute left-[1rem] top-12 text-gray-500"/>
                 
                 </div>)}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                <div className={classNames(active && 'bg-gray-200',
                'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')}
                 onClick={() => navigate('/profile')}
                 > 
                 <p className='text-red-500'> Logout</p> <HiLogout fontSize={24} 
                 className="absolute left-[5rem] top-[5.3rem] text-red-500"/>
                 
                 </div>)}
              </Menu.Item>
            
            </Menu.Items>
            </Transition>
        </Menu>
        </div>
    </div>
  )
}

