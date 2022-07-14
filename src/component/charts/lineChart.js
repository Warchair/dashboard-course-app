import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"

const ChartLine = () => {
	const [chartdata, setchartdata] = useState({})
	const chart = () => {
		setchartdata({
			labels: [
				"10 Oct",
				"12 Oct",
				"14 Oct",
				"16 Oct",
				"18 Oct",
				"20 Oct",
				"22 Oct",
				"24 Oct",
			],
			datasets: [
				{
					label: "Practice",
					data: [40, 32, 33, 32, 26, 28, 27, 36],
					fill: false,
					tension: 0.3,
				},
				{
					label: "Theory",
					data: [30, 32, 34, 31, 29, 32, 33, 30],
					tension: 0.3,
					fill: false,
				},
			],
		})
	}

	useEffect(() => {
		chart()
	}, [])

	return (
		<Line
			className=''
			data={chartdata}
			options={{
				responsive: 1,
				maintainAspectRatio: true,
				responsiveAnimationDuration: 2,

				legend: {
					display: true,
					position: "bottom",
					align: "end",
					labels: {
						fontColor: "rgb(255, 255, 255)",
					},
				},
				scales: {
					yAxes: [
						{
							display: 0,
							ticks: {
								display: false,
							},
							gridLines: {
								zeroLineColor: false,
								drawTicks: false,
								display: false,
								drawBorder: false,
							},
						},
					],
					xAxes: [
						{
							display: 1,
							ticks: {
								display: true,
								maxTicksLimit: 8,
								fontColor: "rgb(255, 255, 255)",
							},
							gridLines: {
								display: true,
								color: "rgb(46, 41, 41,.5)",
							},
						},
					],
				},
			}}
		/>
	)
}

export default ChartLine
