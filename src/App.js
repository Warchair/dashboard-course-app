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
				<div className='bg-gray-100 h-screen w-full overflow-y-hidden flex'>
					{/* sidebar */}
					<div className='side-bar'>
						<div
							className={`absolute top-0 left-0 bottom-0 right-0 bg-gray-400/20 z-[100] ${
								active ? "lg:hidden block" : "hidden"
							}`}
							onClick={onClick}
						></div>
						<Sidebar sidebarOpen={onClick} active={active} />
					</div>
					{/* main content */}
					<div className='relative overflow-y-scroll overflow-x-hidden grow'>
						<Navbar sidebarOpen={onClick} />
						<Routing />
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
