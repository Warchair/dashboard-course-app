import React, { useState, useEffect } from "react"
import { Doughnut } from "react-chartjs-2"

const ChartDoughnut2 = (props) => {
	const [chartData, setchartData] = useState({})
	const chart = () => {
		setchartData({
			labels: ["Week", "Month", "Year"],
			datasets: [
				{
					labels: "Date of Week",
					data: props.data,
					backgroundColor: ["#0177FB", "#FFA952", "#F3F2F2"],
					borderRadius: [20, 0],
				},
			],
		})
	}

	useEffect(() => {
		chart()
	}, [])

	return (
		<Doughnut
			className='text-center w-full'
			data={chartData}
			options={{
				maintainAspectRatio: true,
				responsive: true,
				responsiveAnimationDuration: 2,
				cutoutPercentage: 65,
				elements: {
					arc: {},
				},
				legend: {
					labels: {
						usePointStyle: true,
						boxWidth: 6,
					},
					align: "left",
					position: "left",
				},
				tooltips: {
					mode: "index",
					intersect: false,
				},
			}}
		/>
	)
}

export default ChartDoughnut2
