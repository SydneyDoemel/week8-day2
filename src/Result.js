import React, { Component } from 'react'
import './App.css';
export default class Result extends Component {
  render() {
    return (
    <>
      <div className="home">Result Page</div>
      <div className="subhome">Result: {this.props.num}</div>
      </>
    )
  }
}
