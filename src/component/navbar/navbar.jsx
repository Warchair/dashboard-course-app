import person from '../../assets/avatar/Avatar.png';
import logo from "../../assets/icons/logo.png"

import React, { Component, useState } from 'react';
import { Notifications } from '../dropdown/notifications';
import { Profile } from '../dropdown/profile';
import { Message } from '../dropdown/message';


function Navbar(props) {

    const [open, setOpen] = useState(false);

    const clickOpen = () => {
        setOpen(!open);
    }

	return (
		<div class='bg-white z-[99] sticky top-0'>
			<div className=''>
                    <div className="flex justify-between item-center px-4 py-4">
                        <div className='flex items-center gap-4 '>                            
                            <div className='lg:hidden block cursor-pointer' onClick={props.sidebarOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <div className="md:block hidden relative">
                                <input  type='text' className='search' placeholder="Search of Type" />
                                <div className="absolute top-2 left-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center md:gap-7 gap-4 relative'>
                            <div className='md:hidden block p-2 bg-gray-50 hover:bg-gray-100 rounded-full cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <Message />
                            <Notifications />
                            <Profile />
                        </div>
                    </div>
			</div>
		</div>
	)
}

export default Navbar