import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from './Header.css';
import MenuIcon from './menu.svg';

export default class Header extends React.Component{
  render(){
    return (
      <div className={headerStyles.container}>
        <a className={headerStyles.brandName}>CurAegis</a>

        <a className={headerStyles.menu} href="#"><MenuIcon /></a>


      </div>
    );
  }
}
