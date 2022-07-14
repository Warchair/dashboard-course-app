import React from "react"
import logo from "../../assets/icons/logo.png"
import { dataAccount, dataMenu } from "../data/sidebarData"
import image from "../../assets/pict/vector.png"
import { NavLink } from "react-router-dom"

function Sidebar(props) {
	const Menu = dataMenu.map((item, index) => {
		return (
			<NavLink
				to={item.layout + item.location}
				key={index}
				onClick={props.sidebarOpen}
				className={
					window.location.href.indexOf(item.layout + item.location) > -1
						? "sidebar-item sidebar-active"
						: "sidebar-item hover:bg-blue-600 hover:text-white"
				}
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
			<div className={props.active === false ? 'md:block hidden' : "sidebar-mobile"  }>
				<div className="sidebar-items">
					<div className="md:block hidden">
						<div className='flex gap-3 items-center'>
							<img src={logo} alt='' />
							<h4 className='font-bold text-xl'>Omni.</h4>
						</div>
					</div>
					<div className="md:hidden h-16 bg-white w-[calc(100%_-_50px)] rounded-t-lg fixed flex items-center justify-end px-4 py-4">
						<button  onClick={props.sidebarOpen}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="md:px-0 md:py-0 px-4 pt-16 py-4 ">
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
