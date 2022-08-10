import Course from "../../pages/course/course"
import Overview from "../../pages/overview/overview"
import Settings from "../../pages/settings/settings"
import Statistic from "../../pages/statistic/statistic"

import img1 from "../../assets/background/bg1.png"
import img2 from "../../assets/background/bg2.png"
import img3 from "../../assets/background/bg3.png"
import img4 from "../../assets/background/bg4.png"

import pict1 from "../../assets/pict/pict1.png"
import pict2 from "../../assets/pict/pict2.png"
import pict3 from "../../assets/pict/pict3.png"
import pict4 from "../../assets/pict/pict4.png"

import avatar1 from "../../assets/avatar/1.png"
import avatar2 from "../../assets/avatar/2.png"
import avatar3 from "../../assets/avatar/3.png"
import avatar4 from "../../assets/avatar/4.png"

import icons1 from "../../assets/icons/icons1.png"
import icons2 from "../../assets/icons/icons2.png"

import iconsfill1 from "../../assets/icons/beginner.png"
import iconsfill2 from "../../assets/icons/intermediate.png"
import iconsfill3 from "../../assets/icons/expert.png"
import Appearance from "../../pages/settings/appearance"
import Informations from "../../pages/settings/personal"
import Personal from "../../pages/settings/personal"

// data message

export const dataMessage = [
	{
		id: 1,
		avatar: avatar1,
		name: "Jonathan Benitez",
		thumbMsg: "recently i came...",
		time: "4.55pm",
	},
	{
		id: 2,
		avatar: avatar2,
		name: "Monica Benitez",
		thumbMsg: "Hello Worlds...",
		time: "4.55pm",
	},
	{
		id: 3,
		avatar: avatar3,
		name: "Johny Depp",
		thumbMsg: "I am SuperStar...",
		time: "4.55pm",
	},
	{
		id: 1,
		avatar: avatar1,
		name: "Tony Stark",
		thumbMsg: "my new technology will...",
		time: "4.55pm",
	},
	{
		id: 1,
		avatar: avatar2,
		name: "Jonathan Benitez",
		thumbMsg: "recently i came...",
		time: "4.55pm",
	},
	{
		id: 1,
		avatar: avatar3,
		name: "Jonathan Benitez",
		thumbMsg: "recently i came...",
		time: "4.55pm",
	},
	{
		id: 1,
		avatar: avatar1,
		name: "Jonathan Benitez",
		thumbMsg: "recently i came...",
		time: "4.55pm",
	},
]

// data course

export const dataCourse = [
	{
		id: 1,
		image: pict1,
		title: "UI Styleguide With Figma",
		person: "Jonathan Doe",
		avatar: avatar1,
		level: "intermediate",
		icons: icons1,
		persentase: 45,
	},
	{
		id: 2,
		image: pict2,
		title: "Interectoin design With Figma",
		person: "Killan James",
		avatar: avatar2,
		level: "Beginner",
		icons: icons2,
		persentase: 75,
	},
	{
		id: 3,
		image: pict3,
		title: "3D Animation Conference",
		person: "Jonathan Doe",
		avatar: avatar1,
		level: "intermediate",
		icons: icons1,
		persentase: 65,
	},
	{
		id: 4,
		image: pict4,
		title: "Web App Design With Figma",
		person: "Jonathan Doe",
		avatar: avatar4,
		level: "Master",
		icons: icons1,
		persentase: 25,
	},
]

// data course listing

export const dataListing = [
	{
		name: "3D animation",
		category: "UI Design",
		level: "Beginner",
		tools: "Cinema 4D",
		lesson: "25 tutorials",
		point: "100 points",
		icons: iconsfill1,
	},
	{
		name: "Design Thinking",
		category: "UX Design",
		level: "Intermediate",
		tools: "Adobe XD",
		lesson: "25 tutorials",
		point: "100 points",
		icons: iconsfill2,
	},
	{
		name: "Matching Learning",
		category: "Data Learn",
		level: "Advance",
		tools: "VS Code",
		lesson: "25 tutorials",
		point: "100 points",
		icons: iconsfill3,
	},
	{
		name: "Responsive Design",
		category: "UI Design",
		level: "Beginner",
		tools: "Figma",
		lesson: "25 tutorials",
		point: "100 points",
		icons: iconsfill1,
	},
]

// data settings

export const itemSettings = [
	{
		title: "appearance",
		image: img1,
		layout: "/omni-course",
		location: "/settings/appearance",
		component: Appearance,
	},
	{
		title: "Personal information",
		image: img1,
		layout: "/omni-course",
		location: "/settings/personal-informations",
		component: Personal,
	},
	{
		title: "Billing information",
		image: img1,
		layout: "/omni-course",
		location: "/settings/billing-informations",
		component: Appearance,
	},
	{
		title: "Messages",
		image: img1,
		layout: "/omni-course",
		location: "/settings/message",
		component: Appearance,
	},
	{
		title: "Data expart",
		image: img1,
		layout: "/omni-course",
		location: "/settings/data-expert",
		component: Appearance,
	},
]

// data my planning

export const dataPlanning = [
	{
		title: "3D Animation Conference",
		time: "December 14, 08:30 PM",
		image: img1,
	},
	{
		title: "Handle UX Research",
		time: "December 18, 10:30 PM",
		image: img2,
	},
	{
		title: "Machine Learning Lesson",
		time: "December 18, 10:30 PM",
		image: img4,
	},
	{
		title: "3D Animation Conference",
		time: "December 22, 10:30 PM",
		image: img3,
	},
]

// data top

export const dataTop = [
	{
		name: "Anna Karlos",
		class: "Programming",
		image: avatar1,
	},
	{
		name: "Karla May",
		class: "Maths",
		image: avatar2,
	},
	{
		name: "Bill Jesson",
		class: "Design",
		image: avatar3,
	},
	{
		name: "Alan Baker",
		class: "Physics",
		image: avatar4,
	},
]

// data sidebar menu

export const dataMenu = [
	{
		title: "Overview",
		icons: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
				/>
			</svg>
		),
		layout: "/omni-course",
		location: "/overview",
		component: Overview,
	},
	{
		title: "Course",
		icons: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
				/>
			</svg>
		),
		layout: "/omni-course",
		location: "/course",
		component: Course,
	},
	{
		title: "Planning",
		icons: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
				/>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
				/>
			</svg>
		),
		layout: "/omni-course",
		location: "/planning",
		component: Overview,
	},
	{
		title: "Statistic",
		icons: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
				/>
			</svg>
		),
		layout: "/omni-course",
		location: "/statistic",
		component: Statistic,
	},
]

export const dataClassCompleted = [
	{
		title: "Java Code",
		count: "75",
		colorBg: "bg-orange-100",
		colorFill: "bg-orange-400",
	},
	{
		title: "Design Basic",
		count: "65",
		colorBg: "bg-blue-100",
		colorFill: "bg-blue-400",
	},
	{
		title: "Team Building",
		count: "30",
		colorBg: "bg-indigo-100",
		colorFill: "bg-indigo-400",
	},
	{
		title: "Bussines",
		count: "25",
		colorBg: "bg-purple-100",
		colorFill: "bg-purple-400",
	},
]

// data sidebar account

export const dataAccount = [
	{
		title: "Message",
		icons: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
				/>
			</svg>
		),
		layout: "/omni-course",
		location: "/message",
		component: <Overview />,
	},
	{
		title: "Settings",
		icons: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
				/>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
				/>
			</svg>
		),
		layout: "/omni-course",
		location: "/settings",
		component: Settings,
	},
]
