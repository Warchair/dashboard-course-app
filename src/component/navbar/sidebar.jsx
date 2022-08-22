import React from "react"
import logo from "../../assets/icons/logo.png"
import { dataAccount, dataMenu } from "../data/data"

import { ArrowNarrowLeftIcon } from "@heroicons/react/solid"
import image from "../../assets/pict/vector.png"
import { NavLink } from "react-router-dom"

function Sidebar(props) {
	const Menu = dataMenu.map((item, index) => {
		return (
			<NavLink
				to={item.layout + item.location}
				key={index}
				onClick={props.sidebarOpen}
				className={`sidebar-item
					${window.location.href.indexOf(item.layout + item.location) > -1
						? "sidebar-active"
						: ""}
				`}
			>
				<p>{item.icons}</p>
				<h6>{item.title}</h6>
			</NavLink>
		)
	})

	const Account = dataAccount.map((item, index) => {
		return (
			<NavLink
				to={item.layout + item.location}
				key={index}
				onClick={props.sidebarOpen}
				className={
					window.location.href.indexOf(item.layout + item.location) !== -1
						? "sidebar-item sidebar-active"
						: "sidebar-item hover:bg-blue-600 hover:text-white"
				}
			>
				<p>{item.icons}</p>
				<h6>{item.title}</h6>
			</NavLink>
		)
	})

	return (
			<div>
				<div className={`w-[250px] z-[999] px-4 py-4 overflow-y-scroll h-screen bg-white no-scrollbar lg:relative absolute transition-all duration-300 ease-out ${props.active ? "translate-x-0" : "lg:translate-x-0 -translate-x-[250px]"}`}>
					<div className="">
						<div className='flex gap-3 items-center'>
							<div className="text-gray-700 cursor-pointer lg:hidden block" onClick={props.sidebarOpen}>
								<ArrowNarrowLeftIcon className="h-6 w-6" />
							</div>
							<div className="flex gap-2 items-center">
								<img src={logo} alt='' />
								<h4 className='font-bold text-xl'>Omni.</h4>
							</div>
						</div>
					</div>
					<div className="lg:pt-0 pt-8">
						<div class='md:mt-10 font-medium text-md text-gray-400'>
							<div class='menu'>
								<h4 className=' text-md text-black'>Menu</h4>
								<div className='flex flex-col gap-1 place-content-center mt-2 '>
									{Menu}
								</div>
							</div>
							<div className='px-6 py-6'>
								<div className='h-0.5 w-full bg-gray-300 '></div>
							</div>
							<div className='account mt-2'>
								<h4 className=' text-md text-black'>Account</h4>
								<div className='flex flex-col gap-1 place-content-center mt-2 '>
									{Account}
								</div>
							</div>
						</div>
						<div className='flex- flex-col place-content-center w-full mt-20'>
							<div className=' w-40 h-40 rounded-lg bg-teal-50 px-4 text-center mx-auto flex flex-col place-content-end py-3 relative'>
								<img src={image} alt='' className='absolute -top-1/3 ' />
								<h3 className='font-medium text-lg'>Invite Friend</h3>
								<button className='px-1 py-1 bg-blue-500 rounded-md text-white text-sm w-24 mx-auto'>
									Get The Link
								</button>
							</div>
						</div>
					</div>

				</div>
			</div>

	)
}

export default Sidebar
