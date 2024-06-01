
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
                borderColor: '#7939EF',
                backgroundColor: '#7939EF',
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
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },

    }

    return (
        <div className="bg-white w-full" >
            <div className="hidden 2xl:block">
                <Line data={chartData} options={chartOptions} height={"100%"} />
            </div>
            <div className="2xl:hidden">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div >
    )
}