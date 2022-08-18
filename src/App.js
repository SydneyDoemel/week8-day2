import './App.css';
import React, { Component } from 'react'
import Nav from './components/Nav';
import Home from './views/Home';
import Todo from './views/Todo';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';



export default class App extends Component {
  constructor(){
    super();
    this.state= {

      user:{},
      todo_lst:[]
    }
  }

  logMeIn = (user) => {
    this.setState({
      user: user
    })
  }

  

  render() {
    return (
      <BrowserRouter>
      <div>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo  user={this.state.user}/>} />
        <Route path='/login' element={<Login logMeIn={this.logMeIn}/>} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
      
      </div>
      </BrowserRouter>
    )
  }
}
