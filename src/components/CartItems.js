import React, { Component } from 'react'

class CartItems extends Component {
     getStyle = () => {
        return {
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 2fr .5fr',
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
            cursor: 'pointer',
            float: 'right'
        }
    }
    cartStyle = () => {
        return {
            color: 'white',
            width: '100%',
            boder: 'none',
            padding: '5px 9px'
        }
    }
    render() {
        const {Item, Price, Quantity, itemID} = this.props.item
        const {citemID = itemID, cItem = Item, cPrice = Price, cQuantity = Quantity} = this.props.cart;
        return (
            <div style={this.getStyle()}>
                <span style={this.cartStyle()}>{Item}</span> 
                <span style={this.cartStyle()}>Price:{' '} {Price}</span> 
                <span style={this.cartStyle()}>Quantity:{' '} {Quantity}</span>
                <button style={this.btnStyle()} onClick={ this.props.removeItem.bind(this, citemID)}>X</button>
            </div>
        )
    }
}

export default CartItems
