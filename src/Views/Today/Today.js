import React from 'react';
import LineGraph from '../../Components/LineGraph';
import styles from './Today.css';
import viewStyles from '../Views.css';

export default class Today extends React.Component{
  constructor(props){
    super(props);

    /*
        Dummy Data passed down to LineGraph
    */
    this.state = {
      graphData: [{
        x:1,
        y:5
      },{
        x:2,
        y:7.6
      },{
        x:3,
        y:8.3
      },{
        x:4,
        y:4.9
      },{
        x:5,
        y:3
      },{
        x:6,
        y:3.4
      },{
        x:7,
        y:3
      },{
        x:8,
        y:3.2
      },{
        x:9,
        y:6
      }],
      score: 6,
      totalSteps:2341,
      activeCalories: 55.25,
      sleep: '5hrs 40min'
    }
  }


  render(){

    return (
      <div className={viewStyles.box}>
        <h3>Today</h3>
        <LineGraph data={this.state} />
        <div>
          <ul className={styles.stats}>
            <li>
              <span>{this.state.score}</span>
              <span>Current Awareness</span>
            </li>
            <li>
              <span>Total Steps</span>
              <span>{this.state.totalSteps}</span>
            </li>
            <li>
              <span>Active Calories</span>
              <span>{this.state.activeCalories}</span>
            </li>
            <li>
              <span>Sleep</span>
              <span>{this.state.sleep}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
