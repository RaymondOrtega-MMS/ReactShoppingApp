import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        return {
            display: 'inline-grid',
            width: '33.333%',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }
    itemStyle = () => {
        return {
          background: '#f4f4f4',
          padding: '30px',
          borderBottom: '1px #ccc solid',
          textAlign: 'center'
      }
    }
  render() {
    const {itemID, Item, Price, Quantity} = this.props.todo;
    return (
      <div style = { this.getStyle() }>
          <span style={this.itemStyle()}>{ Item }</span>  
          <span>Price:{ Price }</span>
          <button onClick={this.props.addItem.bind(this, itemID, this.props.checkTotal)} style={ btnStyle }>Add to Cart</button>
      </div>
    );
  }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
}
const btnStyle = {
    backgroundColor: 'green',
    color: 'white',
    boder: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
