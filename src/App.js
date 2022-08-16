import './App.css';
import React, { Component } from 'react'
import Nav from './Nav';
import Home from './Home';

import Result from './Result';
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

  subNum= () =>{
    this.setState({num: this.state.num -1})
  }
  
  multNum= () =>{
    this.setState({num: this.state.num * 5})
  }
  
  divNum= () =>{
    this.setState({num: this.state.num / 2})
  }
  

  

  render() {
    return (
      <BrowserRouter>
      <div>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home num={this.state.num}/>} />
        <Route path='/result' element={<Result num={this.state.num}/>} />

      </Routes>
      <div className="my-btns btn-group btn-group-lg d-flex justify-content-center m-5 row">
      <button onClick={this.addNum} className="btn btn-primary btn-1 pr-5 pl-5">Add 1</button>
      <button onClick={this.subNum} className="btn btn-primary btn-2">Subtract 1</button>
      <button onClick={this.multNum} className="btn btn-primary btn-3">Multiply by 5</button>
      <button onClick={this.divNum} className="btn btn-primary btn-4">Divide by 2</button>
      </div>
      
      </div>
      </BrowserRouter>
    )
  }
}
