import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

import styles from './LineGraph.css'


export default class Graph extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);

  }

  componentDidMount(){

    const ctx = document.getElementById('graph').getContext('2d');
    const graph = new Chart(ctx, {
      type: 'line',

      data: {
        labels: ['12am', '6am', '12pm', '6pm', '12am', '6am', '12pm', '6pm', '12am'],
        datasets:[
          {
            data: this.props.data.graphData,
            borderColor: 'orange',
            backgroundColor: 'transparent'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display:false,
          position:'left'
        },
        scales: {
            yAxes: [{
              gridLines:{
                display: false
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }]
        },
        layout: {
          padding: 10
        },
        elements:{
          point:{
            radius:5,
            hoverRadius:8
          },
          line: {
            tension:.1
          }
        }
      }
    });
  }
  render(){


    return (
      <div className={styles.container}>

          <canvas id="graph" className={styles.canvas}></canvas>

      </div>

    );
  }
}

Graph.propTypes = {
  response: PropTypes.shape({
    graphData: PropTypes.array
  })

}
