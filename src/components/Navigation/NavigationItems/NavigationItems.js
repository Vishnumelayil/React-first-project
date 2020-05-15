import React from 'react'
import styles from './NavigationItems.module.css'
import SubNavItem from './SubNavItems/SubNavItems'

const navItems = (props) => (

    <ul className={styles.NavItems}>

        <SubNavItem link="/" active>Buger Builder</SubNavItem>
        <SubNavItem link="/">Checkout</SubNavItem>

    </ul>

)

export default navItems;