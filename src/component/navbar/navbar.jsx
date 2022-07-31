import person from '../../assets/avatar/Avatar.png';
import logo from "../../assets/icons/logo.png"

import React, { Component, useState } from 'react';


function Navbar(props) {

    const [open, setOpen] = useState(false);

    const clickOpen = () => {
        setOpen(!open);
    }
	return (
		<div class='navbar relative'>
			<div className='body-navbar'>
                <div className='items-navbar-left'>
                    <div className='md:hidden flex items-center gap-4 '>
                        <button className='cursor-pointer' onClick={() => props.sidebarOpen()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                    </div>
                    <div className='logo-brand'>
                            <img src={logo} alt='' />
                            <h4 className='font-bold text-xl'>Omni.</h4>
                        </div>
                    <button className='md:hidden block cursor-pointer' onClick={() => clickOpen()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
                
                    <div className={ open === true ? "items-navbar-right navbar-open " : "items-navbar-right navbar-closed"}>
                        <div className="relative">
                            <input  type='text' className='search' placeholder="Search of Type" />
                            <div className="absolute top-2 left-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col md:items-center md:gap-7 gap-4'>
                            <div className='relative flex items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                <p className='md:hidden block font-medium text-base text-gray-600'>Message</p>
                                <div className="notif-orange">
                                    <p className='text-xs text-white md:hidden'>1</p>
                                </div>
                            </div>
                            <div className='relative flex items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <p className='md:hidden block font-medium text-base text-gray-600'>Notifications</p>
                                    <div className="notif-orange">
                                        <p className='text-xs text-white md:hidden'>4</p>
                                    </div>
                            </div>
                            <div className='md:block hidden'>
                                <img  src={person} alt="" className="h-10 w-10" />
                            </div>
                        </div>
                    </div>
			</div>
		</div>
	)
}

export default Navbar