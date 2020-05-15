import React from 'react'
import bugerLogo from '../../assets/images/burger-logo.png'
import styles from './Logo.module.css'

const logo=(props)=>(

    <div className={styles.Logo}>
        <img  src={bugerLogo} alt="myBurger"/>
    </div>
 
)

export default logo;