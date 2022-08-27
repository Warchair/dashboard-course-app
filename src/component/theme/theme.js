import { SunIcon, MoonIcon } from "@heroicons/react/outline"
import React from "react"
import { ThemeContext } from "./themeContext"

const Toggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext)
	return (
		<div>
			{theme === "dark" ? (
				<button
					className=' mb-[6px] rounded-full dark:text-gray-500 cursor-pointer'
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				>
					<MoonIcon className='w-6 h-6' />
				</button>
			) : (
				<button
					className=' mb-[6px] rounded-full dark:text-gray-300 text-gray-500 cursor-pointer'
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				>
					<SunIcon className='w-6 h-6' />
				</button>
			)}
		</div>
	)
}

export default Toggle
