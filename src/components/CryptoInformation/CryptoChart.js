import React from 'react';
import {Line} from 'react-chartjs-2';

class cryptoChart extends React.Component{

    render(){
        const data =  {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: 
            [{
                label: 'My First dataset',
                fill: false,
                lineTension: 0.4,
                backgroundColor: 'rgba(239, 177, 68)',
                borderColor: 'rgba(239, 177, 68)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(239, 177, 68)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(239, 177, 68)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }]
        }

        const options = {
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    borderDash: [2, 2],
                    borderWidth: 2,
                    mode: 'vertical',
                    value: 10,
                    scaleID: 'x-axis-0',
                }]
            },
            maintainAspectRation: false
        };      

        return(
             <Line
                data={data}
                width={300}
                height={100}
                options={options}
             />
       )
    }
}
   

export default cryptoChart;