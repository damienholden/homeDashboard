import React from 'react'
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import styles from './Header.scss';

export const HeaderComponent = () =>  {
  return (
    <header>
      <nav>
      <AppBar position="static">
        <ul>
          <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
          <li><NavLink exact to='/about' activeClassName="active">About</NavLink></li>
          <li><NavLink exact to='/contact' activeClassName="active">Contact</NavLink></li>
        </ul>
      </AppBar>
      </nav>
  </header>
  )}

export default withStyles(styles)(HeaderComponent);