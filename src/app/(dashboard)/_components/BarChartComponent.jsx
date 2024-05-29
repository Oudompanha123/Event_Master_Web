
'use client'

import { Line } from "react-chartjs-2"
import { Chart as ChartJS, LinearScale, CategoryScale, LineElement, PointElement, Legend, Title, plugins, Tooltip } from 'chart.js'

ChartJS.register(
    LinearScale,
    CategoryScale,
    LineElement,
    PointElement,
    Legend,
    Title,
    Tooltip
)

export const BarChartComponent = () => {
    const chartData = {
        labels: ['Social', 'Sports', 'Technology'],
        datasets: [
            {
                label: 'Event',
                data: [5, 3, 9],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4)',
                tension: 0.3
            }
        ]
    }

    const chartOptions = {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }

    return (
        <div className="bg-white w-full" >
            <Line data={chartData} options={chartOptions} />
        </div >
    )
}