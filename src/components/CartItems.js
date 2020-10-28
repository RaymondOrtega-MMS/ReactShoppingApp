import React, { Component } from 'react'

class CartItems extends Component {
     getStyle = () => {
        return {
            background: '#333',
            color: '#fff',
            padding: '10px'
        }
    }
    render() {
        const {Item, Price, Quantity} = this.props.item
        return (
            <div style={this.getStyle()}>
                {Item} {Price} {Quantity}
            </div>
        )
    }
}

export default CartItems
