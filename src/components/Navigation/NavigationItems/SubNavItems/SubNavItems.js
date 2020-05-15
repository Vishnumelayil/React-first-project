import React from 'react'
import styles from './SubNavItems.module.css'

const subNavItem = (props) => (

    <ul className={styles.Navchild}>
        <a href={props.link} className={props.active ? styles.active : null}>{props.children}</a>
    </ul>


)

export default subNavItem;