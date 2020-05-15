import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItem from '../NavigationItems/NavigationItems'
import DrawerToggle from '../../Navigation/NavigationItems/SideDrawer/SideDrawerToggle/SideDrawerToggle'

const Toolbar =(props)=>{
    return(
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggle}/>
        <div className={styles.Log}>
        <Logo/>
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItem/>
        </nav>
    </header>
)
    }

export default Toolbar;