// import AddTodo from './components/AddTodo'
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header'
// import About from './components/pages/About'
import Todos from './components/Todos' 
import Cart from './components/Cart'
import Calculate from './components/Calculate'
import Sell from './components/pages/sell'
import axios from 'axios';
import './App.css'
class App extends Component {
  state = {
    todos: [],
    cart: []
  }
componentDidMount(){
    axios.get('https://2zvtxl1pu5.execute-api.us-east-1.amazonaws.com/stable')
    .then(res => this.setState({todos: res.data.Items}))
    .catch(err => console.log(err))
  }

calc = () => {
  let total = this.state.cart.reduce((acc, cartItem) => {
    return acc + (cartItem.Price * cartItem.Quantity);
  }, 0);
  return total
}
sellItem = (itemName, price) => {
    if(parseInt(price)){
      axios.post('https://2zvtxl1pu5.execute-api.us-east-1.amazonaws.com/stable',{
        itemID: uuidv4(),
        Item: itemName,
        Price: price,
        Quantity: 1
      })
      .then(res => 
          axios.get('https://2zvtxl1pu5.execute-api.us-east-1.amazonaws.com/stable')
          .then(res => this.setState({todos: res.data.Items}))
          .catch(err => console.log(err))
        )
      .catch(err => console.log(err))
      console.log(itemName, price)
    } else {
      return alert('please use number value!')
    }
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
removeItem = (itemID) => {
  this.setState(prevState => {
    let decrement;
    let item = prevState.cart.filter(item => { 
      let newCart;
      if(item.itemID === itemID) {
        newCart = item;
      }
      return newCart;
    })

    if(item[0].Quantity > 1) {
      decrement = prevState.cart.map(item => {
        if (itemID === item.itemID && item.Quantity > 1){
          let itemState = {...item}
          itemState.Quantity -= 1
          return  itemState 
        } else {
          return item;
        }
      })
    } else {
      decrement = prevState.cart.filter(item => {
        let newCart;
        if(item.itemID !== itemID) {
          newCart = item            
        }
        return newCart;
      })
    }

    return { cart: decrement }
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
          <Route exact path='/sell' render= {props => (
            <React.Fragment>
              <Sell sellItem = {this.sellItem}/>
            </React.Fragment>
          )}/>
          <Route path='/checkout' render= {props => (
            <React.Fragment>
              <h2>Cart</h2>
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