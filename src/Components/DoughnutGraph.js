import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

import styles from './DoughnutGraph.css'


export default class Graph extends React.Component{
  constructor(props){
    super(props);

    /*
        Dummy Data
    */
    this.state = {
      data: [4,8,12]
    }

  }

  componentDidMount(){

    const ctx = document.getElementById('doughnutGraph').getContext('2d');
    const graph = new Chart(ctx, {
      type: 'doughnut',

      data: {
        labels: ['Night', 'Sleep', 'Day'],
        datasets:[
          {
            label: 'Hours',
            backgroundColor: ['#7a6fbe', '#12AFCB', '#f2ca4c'],
            data: this.state.data
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend:{
          position:'bottom'
        },
        layout: {
          padding: 15
        },
        rotation:1 * Math.PI,
        animation: {
          animateScale:true
        },
        circumference: 1.8*Math.PI
      }

    });
  }
  render(){


    return (
      <div className={styles.container}>

          <canvas id="doughnutGraph" className={styles.canvas}></canvas>

      </div>

    );
  }
}
