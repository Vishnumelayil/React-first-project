import React from 'react'
import styled from './Button.module.css'

const button=(props)=>(
<button 
    onClick={props.clicked}
    className={[styled.button,styled[props.btnType]].join('')}>{props.children}</button>

);

export default button;