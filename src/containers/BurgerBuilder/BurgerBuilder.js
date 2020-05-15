import React, { Component } from 'react'
import Auxillary from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGERDIENT_PRICES ={
    salad: 0.4,
    bacon:0.6,
    cheese:0.5,
    meat : 1.2
    
}
class BurgerBuilder extends Component{

    state = {
        ingredient : {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing: false

    } 
    purchaseHandler=()=>{
       this.setState({purchasing:true})
    }

    purchaseCancelHandler=()=>{
        console.log("in cancel")
        this.setState({purchasing:false})
     }

     purchaseContinueHandler=()=>{
      alert("Continue");
     }

    updatePurchasable(updatedIngredients){
     
        const sum=Object.keys(updatedIngredients)
        .map(igKey=>{
            return  updatedIngredients[igKey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0)

        this.setState ({purchasable :sum>0})
    }
    
    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredient
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGERDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredient: updatedIngredients } );
        this.updatePurchasable(updatedIngredients);
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredient[type];
        if(oldCount<1) return;
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredient
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGERDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState( { totalPrice: newPrice, ingredient: updatedIngredients } );
        this.updatePurchasable(updatedIngredients);

    }

    

    render(){
        const disabledInfo ={
            ...this.state.ingredient
        }
        for(let key in disabledInfo ){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return(
            <Auxillary>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary  ingredient={this.state.ingredient}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} 
                        totalprice={this.state.totalPrice}/>
                </Modal>
               <Burger ingredients={this.state.ingredient} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo} 
                purchasable={!this.state.purchasable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}/>
            </Auxillary>
        );

    }

}

export default BurgerBuilder;