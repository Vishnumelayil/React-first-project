import React from 'react';
import Styles from './BuildControls.module.css'
import SubBuildControl from './SubBuildControl'


const controls=[
    { label:'Salad' , type: 'salad' },
    { label:'Bacon' , type: 'bacon' },
    { label:'Cheese' , type: 'cheese'},
    { label:'Meat' , type: 'meat'}
];

const buildControls = (props) => {
  
    return (
        <div className={Styles.BuildControls}>
            <p>Total Prcie : <strong>{props.price.toFixed(2)} </strong> </p>
            { controls.map(ctrl=>(
                
               <SubBuildControl 
               key={ctrl.label} 
               label={ctrl.label} 
               removeLess={() => props.ingredientRemoved(ctrl.type)}
               addMore={() => props.ingredientAdded(ctrl.type)}
               disabledInfo={props.disabled[ctrl.type]}
               /> 
            ))}
            <button className={Styles.OrderButton} 
                disabled={props.purchasable}
                onClick={props.ordered}    >Order Now!</button>
        </div>
    )
}

export default buildControls;

