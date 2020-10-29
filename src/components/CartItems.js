import React, { Component } from 'react'

class CartItems extends Component {
     getStyle = () => {
        return {
            background: '#333',
            color: '#fff',
            padding: '10px'
        }
    }
    btnStyle = () => {
        return {
            backgroundColor: 'red',
            color: 'white',
            boder: 'none',
            padding: '5px 9px',
            borderRadius: '50%' ,
            cursor: 'pointer',
            float: 'right'
        }
    }
    render() {
        const {Item, Price, Quantity} = this.props.item
        const cart = this.props.cart;
        return (
            <div style={this.getStyle()}>
                {Item} {Price} {Quantity}
                <button style={this.btnStyle()} onClick={ this.props.removeItem.bind(this, cart)}>X</button>
            </div>
        )
    }
}

export default CartItems
