import React from 'react';
import classes from './Sidebar.module.css';


const Sidebar = () => {
  return (
    <div>
        <div className={classes.sidebar}>
            <a className={classes.active} href="#home">Daily Tasks</a>
            <a href="#news">Upcoming Tasks</a>
            <a href="#contact">Profile</a>
            <a href="#about">Settings</a>
        </div>
    </div>
  )
}

export default Sidebar;

