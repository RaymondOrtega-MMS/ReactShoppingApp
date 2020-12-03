import React, { Component } from 'react';
import SellItem from '../sellItem';
class Sell extends Component {
    render() {
        return <SellItem sellItem = {this.props.sellItem}></SellItem>
    }
}
export default Sell