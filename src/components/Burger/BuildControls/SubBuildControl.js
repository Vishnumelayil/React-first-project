import React from 'react'
import Styles from './SubBuildControl.module.css'

const subBuildControl=(props)=>{
    return(
    <div className={Styles.BuildControl}>
        <div className={Styles.Label}>{props.label}</div>
        <button className={Styles.Less} onClick={props.removeLess} disabled ={props.disabledInfo}>Less</button>
        <button className={Styles.More} onClick={props.addMore}>More</button>
    </div>
    )
}
export default subBuildControl;