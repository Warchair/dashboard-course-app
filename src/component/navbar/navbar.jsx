import React, { Component, useState } from 'react';
import { Notifications} from '../dropdown/notifications';
import {MenuAlt1Icon, SearchIcon } from "@heroicons/react/outline"
import { Profile } from '../dropdown/profile';
import { Message } from '../dropdown/message';
import { Search } from '../dropdown/search';


function Navbar(props) {

	return (
		<div class='bg-white dark:bg-slate-800 z-[99] sticky top-0'>
			<div className=''>
                    <div className="flex justify-between item-center px-4 py-4">
                        <div className='flex items-center gap-4 '>                            
                            <div className='lg:hidden block cursor-pointer' onClick={props.sidebarOpen}>
                                <MenuAlt1Icon className="h-6 w-6 text-black dark:text-gray-300" />
                            </div>
                            <div className="md:block hidden relative">
                                <input  type='text' className='search dark:text-gray-200' placeholder="Search of Type" />
                                <div className="absolute top-2 left-2">
                                    <SearchIcon className="h-6 w-6 text-gray-500"  />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center md:gap-7 gap-4 '>
                            <Search />
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