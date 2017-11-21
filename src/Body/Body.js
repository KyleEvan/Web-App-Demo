import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Body.css';

import Aside from '../Aside/Aside';

import Dashboard from '../Views/Dashboard/Dashboard';
import Today from '../Views/Today/Today';
import SleepLog from '../Views/SleepLog/SleepLog';
import Sleep from '../Views/Sleep/Sleep';


let classes = classNames.bind(styles);

export default class Body extends React.Component{
  constructor(props){
    super(props);

  }
  render(){

    let className = classes({
      container: true,
      open: this.props.expanded
    })

    return (
      <div className={className}>
        <Aside toggleAside={this.props.toggleAside}/>
        <div className={styles.main}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/today" component={Today}/>
            <Route path="/sleep" component={Sleep}/>
            <Route path="/sleep-log" component={SleepLog}/>
            <Route component={Dashboard}/>
          </Switch>
        </div>
      </div>
    );
  }
}

Body.propTypes = {
  asideExpanded: PropTypes.bool
};
