import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import { dataLearningPont } from "../data/chartData"

const ChartLine2 = () => {
	const [chartdata, setchartdata] = useState({})
	const chart = () => {
		setchartdata({
			labels: dataLearningPont.map((item) => item.month),
			datasets: [
				{
					label: "Complete",
					data: dataLearningPont.map((item) => item.complete),
					tension: 0,
					fill: false,
					borderColor: "#269AFF",
					pointBackgroundColor: "#0A0BEB",
					pointBorderColor: "#FAFFFF",
					pointBorderWidth: 1,
					pointRadius: 4,
					borderWidth: 2,
					backgroundColor: ["transparent"],
				},
				{
					label: "Progress",
					data: dataLearningPont.map((item) => item.progress),
					tension: 0,
					borderColor: "#269AFF",
					pointBackgroundColor: "#0A0BEB",
					pointBorderColor: "#FAFFFF",
					pointBorderWidth: 1,
					pointRadius: 4,
					borderWidth: 2,
					backgroundColor: ["transparent"],
				},
			],
		})
	}

	useEffect(() => {
		chart()
	}, [])

	return (
		<div className='h-[250px]'>
			<Line
				data={chartdata}
				options={{
					maintainAspectRatio: false,
					responsive: true,
					responsiveAnimationDuration: 2,
					legend: {
						labels: {
							usePointStyle: true,
							boxWidth: 6,
						},
						display: false,
					},
					tooltips: {
						mode: "index",
						intersect: false,
					},
					scales: {
						xAxes: [
							{
								gridLines: {
									display: false,
									drawBorder: false,
									zeroLineColor: "transparent",
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
									max: 150,
									stepSize: 50,
								},
								gridLines: {
									display: false,
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

export default ChartLine2
