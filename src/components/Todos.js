import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return  this.props.todos.map((todo) => (
        <TodoItem  key = { todo.id } markComplete = 
        { this.props.markComplete } todo = {todo} delTodo={ this.props.delTodo }/>

    ));
  }
}
//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodos: PropTypes.func.isRequired,
}
export default Todos;

