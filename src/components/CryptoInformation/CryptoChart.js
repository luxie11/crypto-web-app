import React from 'react';
import { Line } from 'react-chartjs-2';

import './style/CryptoChart.css';
import Loader from '../Loader';

class cryptoChart extends React.Component{

    state = { width: window.innerWidth }

    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions)
    }

    updateDimensions = () =>{
        this.setState({
            width:window.innerWidth
        })
    }

    getXaxis() {
        let dateArray = [];
        this.props.history.Data.map(date =>{
            return dateArray.push(new Date(date.time * 1000).toISOString().slice(0,10))
        })
        return dateArray;
    }

    getYaxis(){
        let priceArray = [];
        this.props.history.Data.map(element =>{
            return priceArray.push(element.high);
        });
        return priceArray;
    }

    renderCryptoChart(){
        if(!this.props.history){
            return <Loader />
        }
       
        const data =  {
            labels: this.getXaxis(),
            datasets: 
            [{
                label: 'Price by day',
                fill: true,
                lineTension: 0,
                backgroundColor: 'rgba(239, 177, 68, 0.3)',
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
                data: this.getYaxis()
            }]
        }

        const options = {
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    borderDash: [2, 2],
                    borderWidth: 2,
                    mode: 'vertical',
                    value: 100,
                    scaleID: 'x-axis-0',
                }]
            },
            maintainAspectRation: false
        }; 
        const chartHeight = this.state.width >= 1024 ? 70 : 250
        return(  
            <Line
                data={data}
                width={300}
                height={chartHeight}
                options={options}
            />
        )     
    }

    render(){
        return(
            <div className="crypto-chart">
                {this.renderCryptoChart()}
           </div>
       )
    }
}


export default cryptoChart
