// import AddTodo from './components/AddTodo'
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header'
// import About from './components/pages/About'
import Todos from './components/Todos' 
import Cart from './components/Cart'
import Calculate from './components/Calculate'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './App.css'
class App extends Component {

  state = {
    todos: [
      {
        itemID: uuidv4(),
        Item: 'car',
        Price: 23,
        Quantity: 1
      },
      {
        itemID: uuidv4(),
        Item: 'truck',
        Price: 33,
        Quantity: 1
      },
      {
        itemID: uuidv4(),
        Item: 'van',
        Price: 75,
        Quantity: 1
      }
    ],
    cart: [],
    total: 0
  }
calc = () => {
  let total = this.state.cart.reduce((acc, cartItem) => {
    return acc + (cartItem.Price * cartItem.Quantity);
  }, 0);
  return total
}
  addItem = (itemID, checkTotal, amount) => {
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
    })
  }
    else {
      this.setState({ cart: [...this.state.cart, ...this.state.todos.filter(todo => todo.itemID === itemID)]})
    }
  }
  removeItem = (ItemID) => {
    this.setState(prevState => {
      let newCart;
      let updatedCart = prevState.cart.filter(item => { 
        if(item.itemID !== ItemID) {
          return item 
        }
      })
      return { cart: updatedCart } 
    })
  }
render() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <Header/>
          <Route exact path='/' render= {props => (
            <React.Fragment>
              <Todos todos={this.state.todos}checkTotal={this.checkTotal}addItem = {this.addItem}/>
              <h2>Cart</h2>
              <Cart cart={this.state.cart} removeItem = {this.removeItem}/>
              <Calculate calc={this.calc} checkTotal ={this.checkTotal}cart={this.state.cart} total={this.state.total}/>
            </React.Fragment>
          )}/>
          <Route path='/checkout' render= {props => (
            <React.Fragment>
              <h1>Cart:</h1>
              <Cart cart={this.state.cart} removeItem = {this.removeItem}/>
              <Calculate calc={this.calc} checkTotal ={this.checkTotal}cart={this.state.cart} total={this.state.total}/>
            </React.Fragment>
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

