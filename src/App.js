import './App.css';
import React, { Component } from 'react'
import Nav from './components/Nav';
import Home from './views/Home';
import Todo from './views/Todo';
import { Routes, Route,BrowserRouter } from 'react-router-dom';



export default class App extends Component {
  constructor(){
    super();
    this.state= {
      num:100
    }
  }
  addNum= () =>{
    this.setState({num: this.state.num +1})
  }


  

  render() {
    return (
      <BrowserRouter>
      <div>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home num={this.state.num}/>} />
        <Route path='/todo' element={<Todo num={this.state.num}/>} />

      </Routes>
      
      </div>
      </BrowserRouter>
    )
  }
}
