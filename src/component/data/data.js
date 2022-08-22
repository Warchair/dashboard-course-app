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
import Personal from "../../pages/settings/personal"

import {
	HomeIcon,
	BookOpenIcon,
	ChartPieIcon,
	ChartSquareBarIcon,
	ChatIcon,
	CogIcon,
} from "@heroicons/react/outline"

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
		thumbMsg: "my new technology...",
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
		icons: <HomeIcon className='h-6 w-6' />,
		layout: "/omni-course",
		location: "/overview",
		component: Overview,
	},
	{
		title: "Course",
		icons: <BookOpenIcon className='h-6 w-6' />,
		layout: "/omni-course",
		location: "/course",
		component: Course,
	},
	{
		title: "Planning",
		icons: <ChartPieIcon className='h-6 w-6' />,
		layout: "/omni-course",
		location: "/planning",
		component: Overview,
	},
	{
		title: "Statistic",
		icons: <ChartSquareBarIcon className='h-6 w-6' />,
		layout: "/omni-course",
		location: "/statistic",
		component: Statistic,
	},
]

export const dataClassCompleted = [
	{
		title: "Java Code",
		count: 75,
		percentage: "w-[75%]",
		colorBg: "bg-orange-100",
		colorFill: "bg-orange-400",
	},
	{
		title: "Design Basic",
		count: 65,
		percentage: "w-[65%]",
		colorBg: "bg-blue-100",
		colorFill: "bg-blue-400",
	},
	{
		title: "Team Building",
		count: 30,
		percentage: "w-[30%]",
		colorBg: "bg-indigo-100",
		colorFill: "bg-indigo-400",
	},
	{
		title: "Bussines",
		count: 25,
		percentage: "w-[25%]",
		colorBg: "bg-purple-100",
		colorFill: "bg-purple-400",
	},
]

// data sidebar account

export const dataAccount = [
	{
		title: "Message",
		icons: <ChatIcon className='h-6 w-6' />,
		layout: "/omni-course",
		location: "/message",
		component: <Overview />,
	},
	{
		title: "Settings",
		icons: <CogIcon className='h-6 w-6' />,
		layout: "/omni-course",
		location: "/settings",
		component: Settings,
	},
]
