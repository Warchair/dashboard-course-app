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
				<div className='bg-gray-100 h-full w-full'>
					<div className='side-bar'></div>
					<Sidebar sidebarOpen={onClick} active={active} />
					<Navbar sidebarOpen={onClick} />
					<div className='w-full flex justify-end px-4'>
						<Routing />
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
