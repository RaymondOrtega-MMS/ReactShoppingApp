// import AddTodo from './components/AddTodo'
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header'
// import About from './components/pages/About'
import Todos from './components/Todos' 
import Cart from './components/Cart'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './App.css'
class App extends Component {

  state = {
    todos: [
      {
        itemID: 1,
        Item: 'car',
        Price: 23,
        Quantity: 1
      },
      {
        itemID: 2,
        Item: 'truck',
        Price: 33,
        Quantity: 1
      },
      {
        itemID: 3,
        Item: 'van',
        Price: 75,
        Quantity: 1
      }
    ],
    cart: []
  }
  addItem = (itemID) => {
    const checkCart = (element) => element.itemID === itemID;
    if(this.state.cart.some(checkCart)){
      this.setState(prevState => {
        let updatedCart = prevState.cart.map(item => {
          if(itemID === item.itemID) {
            let itemState = {...item}
            itemState.Quantity += 1
              return itemState;
          } else {
              return item;
          }
        })
          return { cart: updatedCart }
      }, )
    }
    else {
      this.setState({ cart: [...this.state.cart, ...this.state.todos.filter(todo => todo.itemID === itemID)]})
    }
  }

  removeItem = (cItem) => {
    console.log(cItem)
  }
render() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <Header/>
          <Route exact path='/' render= {props => (
            <React.Fragment>
              {/* <AddTodo addTodo = {this.addTodo}/> */}
              <Todos todos = {this.state.todos} /*markComplete = { this.markComplete }*/
              addItem = {this.addItem}/>
              <Cart cart={this.state.cart} removeItem = {this.removeItem}/>
            </React.Fragment>
          )}/>
          <Route path='/checkout' render= {props => (
            <Cart cart={this.state.cart} removeItem = {this.removeItem}/>
          )}/>
        </div>
      </div>
    </Router>
  );
}
}

export default App;


  //Runs right after the component mounts. Lif cycle method
  // componentDidMount(){
  //   axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
  //   .then(res => this.setState({todos: res.data}))
  // }
  // Toggle Comlplete
  // markComplete = (itemID) => {
  //     this.setState({ todos: this.state.todos.map(todo => {
  //       if(todo.itemID === itemID){
  //         console.log(todo)
  //         todo.completed = !todo.completed
  //       }
  //       return todo;
  //     })  });
  // }
  // add item to cart 

  // add Todos
  // addTodo = (title) => {
  //   const newTodo = {
  //         id: uuidv4(),
  //         title,
  //         completed: false
  //   }
  //   this.setState({ todos: [...this.state.todos, newTodo] })
  // }

