import React from 'react';
import Today from '../Today/Today';
import Sleep from '../Sleep/Sleep';
import SleepLog from '../SleepLog/SleepLog';
import styles from './Dashboard.css';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div>
        <div className={styles.pageTitle}>
          <h1>Admin Dashboard</h1>
        </div>
        <div className={styles.container}>
          <div>
            <Today />
          </div>
          <div>
            <SleepLog />
          </div>
          <div>
            <Sleep />
          </div>
        </div>
      </div>
    );
  }
}
