import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
//Styles 
getStyle = () => {
  return {
      display: 'inline-grid',
      width: '32%',
      background: '#f4f4f4',
      margin: '15px 0 0 15px',
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
    const {itemID, Item, Price} = this.props.todo;
    
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
    width: '33%',
    margin: '0 0 0 33%',
    color: 'white',
    boder: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
