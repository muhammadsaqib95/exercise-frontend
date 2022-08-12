
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [23, 19, 13],
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
        //   'rgba(75, 192, 192, 0.4)',
        //   'rgba(153, 102, 255, 0.4)',
        //   'rgba(255, 159, 64, 0.4)',
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        // borderWidth: 1,
        
    },
],
labels: ['saving', 'investment', 'profit'],
  };

  
export default function ChartComp() {
  return (
    <div><Doughnut data={data} /></div>
  )
}
