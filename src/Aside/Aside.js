import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowIcon from '../svg/arrow-left.svg';
import classNames from 'classnames/bind';
import styles from './Aside.css';
let classes = classNames.bind(styles);

export default class Aside extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        isExpanded: false
    }
  }
  handleDropdown(e){
    e.preventDefault();
    this.setState({
        isExpanded: !this.state.isExpanded,
        height: this.refs.links.clientHeight
    })
  }
  render(){
    const {isExpanded, height} = this.state;
    const currentHeight = isExpanded ? height : 0;
    const classNames = classes({
      dropdown: true,
      open: isExpanded
    })
    return (
      <div className={styles.container}>
        <ul>
          <li><NavLink onClick={this.props.toggleAside} activeClassName={styles.active} exact to="/">Dashboard</NavLink></li>
          <li className={classNames}>
            <a href="#" onClick={(e) => this.handleDropdown(e)}>Views <span className={styles.caret}><ArrowIcon /></span></a>
            <div style={{height: currentHeight+'px'}}>
              <ul ref="links">
                <li><NavLink onClick={this.props.toggleAside} activeClassName={styles.active} to="/today">Today</NavLink></li>
                <li><NavLink onClick={this.props.toggleAside} activeClassName={styles.active} to="/sleep">Sleep</NavLink></li>
                <li><NavLink onClick={this.props.toggleAside} activeClassName={styles.active} to="/sleep-log">Sleep Log</NavLink></li>
              </ul>
            </div>
          </li>
          <li><a href="#">User Mgmt</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Data Export</a></li>
          <li><a href="#">Customer Service</a></li>
        </ul>
      </div>
    );
  }
}
