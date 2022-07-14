import React from "react"
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom"
import Course from "../pages/course/course"
import CourseDetail from "../pages/course/courseDetail"
import Overview from "../pages/overview/overview"
import Settings from "../pages/settings/settings"
import Statistic from "../pages/statistic/statistic"

function Routing() {
	return (
		<div className='md:w-[calc(100vw_-_250px)] w-full font-inter'>
			<Routes>
				<Route path='/omni-course/overview' element={<Overview />} />
				<Route path='/omni-course/course' element={<Course />} />
				<Route path='/omni-course/planning' element={<Overview />} />
				<Route path='/omni-course/statistic' element={<Statistic />} />
				<Route path='/omni-course/message' element={<Overview />} />
				<Route path='/omni-course/settings' element={<Settings />} />
				<Route path='/omni-course/course/:id' element={<CourseDetail />} />
				<Route
					path='/omni-course/settings/personal-informations'
					element={<CourseDetail />}
				/>
				<Route
					path='/omni-course/settings/appearance'
					element={<CourseDetail />}
				/>

				<Route
					path='/'
					element={<Navigate replace to='/omni-course/overview' />}
				/>
			</Routes>
		</div>
	)
}

export default Routing
