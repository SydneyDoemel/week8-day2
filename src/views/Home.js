import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
        <>
      <div className="home mt-5">Home Page</div>
      
      <div className="my-btns btn-group btn-group-lg d-flex justify-content-center m-5 row">
      <Link to='/todo' className="btn btn-outline-dark pr-5 pl-5">Go To Your To-Do List</Link>
  
      
      </div>
      </>
    )
  }
}
