import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return  this.props.todos.map((todo) => (
        <TodoItem  key = { todo.id } markComplete = 
        { this.props.markComplete } todo = {todo} addItem={ this.props.addItem } checkCart = {this.checkCart}/>

    ));
  }
}
//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired
}
export default Todos;

