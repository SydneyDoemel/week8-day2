import React, { Component } from 'react'
import '../App.css';

export default class ListItems extends Component {
  render() {
    const items = this.props.items;
    const listItems = items.map(item =>
        {return(
            <div className=' mt-5'>
            <div className="container4 pl-5" id={item.key}>
                <p className='text-break todo-text'>{item.text}</p>
                <div className='todo-btn d-flex'> <button className='btn-lg btn-outline-success align-self-center ml-5 align-items-end '>Done</button>
                    <button className='btn btn-lg btn-outline-danger align-self-center ml-5 align-items-end ' onClick={()=> this.props.deleteItem(item.key)}>Delete</button>
               
                </div>

                
            </div>
            </div>
        )})
    return (
      <div>{listItems}</div>
    )
  }
}

// hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello


