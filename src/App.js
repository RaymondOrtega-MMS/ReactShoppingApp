import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header'
import About from './components/pages/About'
import Todos from './components/Todos' 
import AddTodo from './components/AddTodo'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './App.css'
class App extends Component {

  state = {
    todos: []
  }
  //Runs right after the component mounts. Lif cycle method
  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }
  // Toggle Comlplete
  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
          console.log(todo)
          todo.completed = !todo.completed
        }
        return todo;
      })  });
  }
  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    console.log(id)
  }
  // add Todos
  addTodo = (title) => {
    const newTodo = {
          id: uuidv4(),
          title,
          completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header/>
            <Route exact path='/' render= {props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo}/>
                <Todos todos = {this.state.todos} markComplete = { this.markComplete }
                delTodo = {this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
