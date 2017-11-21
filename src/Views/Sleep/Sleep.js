import React from 'react';
import DoughnutGraph from '../../Components/DoughnutGraph';
import styles from './Sleep.css';
import viewStyles from '../Views.css';

export default class Sleep extends React.Component{
  constructor(props){
    super(props);

    /*
        Dummy data
    */
    this.state = {
      day: 'Tuesday',
      date: 'Nov 15',
      sleepStart:'12:00 AM',
      sleepWake:'8:00 AM',
      wokeUp: 2,
      awake:90,
      inMotion:10
    }
  }

  render(){

    return (
      <div className={viewStyles.box}>
        <h3>{this.state.day} Night</h3>
        <div className={styles.graph}>
          <DoughnutGraph />
          <div className={styles.sleepStart}>
            {this.state.date}<br />
            {this.state.sleepStart}<br />
            <span>Sleep Start</span>
          </div>
          <div className={styles.sleepEnd}>
            {this.state.date}<br />
            {this.state.sleepWake}<br />
            <span>Wake Time</span>
          </div>
        </div>
        <div>
          <ul className={styles.stats}>
            <li>
              <span>Woke Up</span>
              <span>{this.state.wokeUp}</span>
            </li>
            <li>
              <span>Awake For</span>
              <span>{this.state.awake}</span>
            </li>
            <li>
              <span>In Motion For</span>
              <span>{this.state.inMotion}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
