import React, { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"

const ChartBar = () => {
	const [chartData, setchartData] = useState({})
	const chart = () => {
		setchartData({
			labels: ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"],
			datasets: [
				{
					labels: "Data Harian",
					data: [400, 430, 670, 345, 576, 675, 567],
					backgroundColor: [
						"rgba(56,205,240,.9)",
						"red",
						"blue",
						"green",
						"yellow",
					],
				},
			],
		})
	}
	useEffect(() => {
		chart()
	}, [])

	return (
		<div className='w-full'>
			<Bar
				data={chartData}
				options={{
					responsive: 1,
					maintainAspectRatio: false,
					legend: {
						display: false,
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
					scales: {
						yAxes: [
							{
								display: 0,
								ticks: {
									display: false,
									maxTicksLimit: 7,
								},
								gridLines: {
									zeroLineColor: "transparent",
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
								},
								gridLines: {
									zeroLineColor: "transparent",
									drawTicks: false,
									display: false,
									drawBorder: false,
								},
							},
						],
					},
				}}
			/>
		</div>
	)
}

export default ChartBar
