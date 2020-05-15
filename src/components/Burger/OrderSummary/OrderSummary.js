import React from 'react'
import Auxillary from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

const ordersummary=(props)=>{
    const ingredientSummary =Object.keys(props.ingredient)
        .map(igKey=>{
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredient[igKey]}</li>
        })
return(
<Auxillary>

    <h3>Your order</h3>
    <ul>
        {ingredientSummary}
    </ul>

    <p>Total Price: {props.totalprice.toFixed(2)} </p>
    <p>Continue checkout?</p>
    <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
</Auxillary>

)
}

export default ordersummary;