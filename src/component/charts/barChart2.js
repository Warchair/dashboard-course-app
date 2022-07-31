import React, { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import { dataLearningPont2 } from "../data/chartData"

const ChartBar2 = () => {
	const [chartData, setchartData] = useState({})
	const chart = () => {
		setchartData({
			labels: dataLearningPont2.map((item) => item.day),
			datasets: [
				{
					labels: "Your Point",
					data: dataLearningPont2.map((item) => item.yourPoint),
					backgroundColor: [
						"#FFA952",
						"#0177FB",
						"#7D88FD",
						"#EC5491",
						"#0177FB",
					],
					barThickness: 25,
				},
				{
					labels: "High Point",
					data: dataLearningPont2.map((item) => item.highPoint),
					backgroundColor: "#EFF2FF",
					barThickness: 25,
				},
			],
		})
	}
	useEffect(() => {
		chart()
	}, [])

	return (
		<div className='w-full h-[250px]'>
			<Bar
				className=''
				data={chartData}
				options={{
					maintainAspectRatio: false,
					responsive: true,
					responsiveAnimationDuration: 2,
					legend: {
						display: false,
					},
					tooltips: {
						mode: "index",
						intersect: false,
					},
					scales: {
						xAxes: [
							{
								stacked: true,
								gridLines: {
									display: false,
									drawBorder: false,
									zeroLineColor: "#F3F2F2",
								},
								ticks: {
									beginAtZero: true,
								},
							},
						],
						yAxes: [
							{
								display: true,
								position: "left",
								ticks: {
									beginAtZero: true,
									min: 0,
									max: 4000,
									stepSize: 1000,
								},
								gridLines: {
									display: true,
									drawBorder: false,
									zeroLineColor: "transparent",
								},
							},
						],
					},
				}}
			/>
		</div>
	)
}

export default ChartBar2
