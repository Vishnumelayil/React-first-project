import React from 'react'
import Logo from '../../../Logo/Logo'
import NavItems from '../NavigationItems'
import styles from './SideDrawer.module.css'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import Auxiilary from '../../../../hoc/Auxillary'


const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return (
        <Auxiilary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Auxiilary>
    );

}

export default sideDrawer;