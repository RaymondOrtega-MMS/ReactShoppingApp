import React, { Component } from 'react'
import CartItems from './CartItems'
export class Cart extends Component {
    render() {
        return  this.props.cart.map((item) => (
                <CartItems  key = { item.itemID } markComplete = 
                { this.props.markComplete } item = {item} addItem={ this.props.addItem } removeItem={ this.props.removeItem } cart={this.props.cart}/>
        ));
    }
}

export default Cart

