import React from 'react';
import classes from './Nav.module.css';


const Nav = () => {
    return <nav className={classes.nav}>
        <div className= {classes.item}>
            <a>Profile</a>
        </div>
        <div className= {`${classes.item} ${classes.active}`}>
            <a>Messages</a>
        </div>
        <div className= {classes.item}>
            <a>News</a>
        </div>
        <div className= {classes.item}>
            <a>Music</a>
        </div>
        <div className= {classes.item}>
            <a>Settings</a>
        </div>
        <div className= {classes.item}>
            <a>Messages</a>
        </div>
    </nav>
}

export default Nav;
