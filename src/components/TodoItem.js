import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

  render() {
    const {itemID, Item, Price, Quantity} = this.props.todo;
    return (
      <div style = { this.getStyle() }>
            { Item } {' '} { Price }
            <button onClick={this.props.addItem.bind(this, itemID, Quantity)} style={ btnStyle }>+</button>
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
    backgroundColor: 'lightgreen',
    color: 'white',
    boder: 'none',
    padding: '5px 9px',
    borderRadius: '50%' ,
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
