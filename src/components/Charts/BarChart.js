import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';
import "./style.css"


function BarChart({data:{confirmed,recovered,deaths},country}) {
    const barChart = (
        confirmed
            ? (
                <Bar className='style'
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [
                            {
                                label: ['Infected',"Recovered","Deaths"].map((item)=> item),
                                backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                                data: [confirmed.value,recovered.value,deaths.value]
                            },
                        ],

                        
                    }} 


                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country} ` },
                    }}
                   
                />
            ):null)
    return <div className='style'>
      { barChart}
        </div>

}

export default BarChart;