import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./component/navbar/navbar"
import Sidebar from "./component/navbar/sidebar"
import Routing from "./route/route"

function App() {
	const [active, setActive] = useState(false)

	const onClick = () => {
		setActive(!active)
	}
	console.log(active)

	return (
		<div className='font-inter'>
			<Router>
				<div className='bg-gray-100 min-h-screen w-full'>
					<div className='side-bar'>
						<Sidebar sidebarOpen={onClick} active={active} />
					</div>
					<div className='w-full flex justify-end'>
						<div className='lg:w-[calc(100%_-_250px)] w-full relative'>
							<Navbar sidebarOpen={onClick} />
							<Routing />
						</div>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
