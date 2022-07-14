import React, { useState, useEffect } from "react"
import { Doughnut } from "react-chartjs-2"

const ChartDoughnut = () => {
	const [chartData, setchartData] = useState({})
	const chart = () => {
		setchartData({
			labels: ["Mon", "Tue", "Wed", "Thu", "Fry", "Sat", "Sun"],
			datasets: [
				{
					labels: "Date of Week",
					data: [30, 10, 23, 56, 28, 18, 35],
					backgroundColor: [
						"rgba(56,205,240,.9)",
						"red",
						"blue",
						"green",
						"yellow",
					],
					showLine: false,
				},
			],
		})
	}
	useEffect(() => {
		chart()
	}, [])

	return (
		<Doughnut
			className=''
			data={chartData}
			options={{
				responsive: 1,
				maintainAspectRatio: true,
				responsiveAnimationDuration: 2,
				legend: {
					display: false,
					position: "bottom",
					align: "right",
				},
				tooltips: {
					bodySpacing: 4,
					mode: "nearest",
					intersect: 0,
					position: "nearest",
					xPadding: 10,
					yPadding: 10,
					caretPadding: 10,
				},
			}}
		/>
	)
}

export default ChartDoughnut
