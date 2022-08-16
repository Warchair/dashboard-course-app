import React from "react"
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom"
import Course from "../pages/course/course"
import CourseDetail from "../pages/course/courseDetail"
import Message from "../pages/message/message"
import Overview from "../pages/overview/overview"
import Planning from "../pages/planning/planning"
import Settings from "../pages/settings/settings"
import Statistic from "../pages/statistic/statistic"

function Routing() {
	return (
		<div className='w-full font-inter'>
			<Routes>
				<Route path='/omni-course/overview' element={<Overview />} />
				<Route path='/omni-course/course' element={<Course />} />
				<Route path='/omni-course/planning' element={<Planning />} />
				<Route path='/omni-course/statistic' element={<Statistic />} />
				<Route path='/omni-course/message' element={<Message />} />
				<Route path='/omni-course/settings/*' element={<Settings />} />
				<Route path='/omni-course/course/:id' element={<CourseDetail />} />
				<Route
					path='/'
					element={<Navigate replace to='/omni-course/overview' />}
				/>
			</Routes>
		</div>
	)
}

export default Routing
