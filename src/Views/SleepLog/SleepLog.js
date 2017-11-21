import React from 'react';
import ArrowIcon from '../../svg/arrow-left.svg';
import styles from './SleepLog.css';
import viewStyles from '../Views.css';

export default class SleepLog extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      day: 'Tuesday',
      date: 'Nov 15',
      sleepStart:'12:00 AM',
      sleepWake:'8:00 AM',
      totalSleep:'8'
    }
  }
  render(){
    return (
      <div className={viewStyles.box}>
        <h3>Sleep Log</h3>
        <div className={styles.currentDay}>
          <span className={styles.left}><ArrowIcon/></span>
          <h4>Nov 12 - Nov 18</h4>
          <span className={styles.right}><ArrowIcon/></span>
        </div>
        <ul className={styles.stats}>
          <li>
            <div>
              <span>{this.state.date}</span>
              <span>{this.state.sleepStart}</span>
            </div>
            <div>
              <span>{this.state.date}</span>
              <span>{this.state.sleepWake}</span>
            </div>
            <div>
              {this.state.totalSleep} hrs
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
