import React, { Component } from 'react'
import CartItems from './CartItems'
import Calculate from './Calculate'
export class Cart extends Component {
    render() {
        <h1>Cart</h1>
        return  this.props.cart.map((item) => (
                <CartItems  key = { item.itemID } markComplete = 
                { this.props.markComplete } item = {item} addItem={ this.props.addItem } removeItem={ this.props.removeItem } cart={this.props.cart}/>
        ))
    }
}

export default Cart

