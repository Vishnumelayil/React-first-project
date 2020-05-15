import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/NavigationItems/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {

        this.setState({ showSideDrawer: false });

    }

    drawerToggleHandler = ()=>{

        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Auxillary>
                <Toolbar drawerToggle={this.drawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler} />
                <main className={styles.Content}>{this.props.children}</main>
            </Auxillary>


        );
    }
}


export default Layout;