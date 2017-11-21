import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import MenuIcon from '../svg/menu.svg';

export default class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className={styles.headContainer}>
        <a className={styles.brandName}>CurAegis</a>

        <a className={styles.menu} href="#" onClick={this.props.onClick}><MenuIcon /></a>


      </div>
    );
  }
}
