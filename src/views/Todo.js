import React, { Component } from 'react'
import '../App.css';
import ListItems from '../components/ListItems';

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            items:[],
            currentItem:{
              text:'',
              key: '',
              done: false
            }
        }
    }
  handleInput = (e) => {
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    const newItems=[...this.state.items, newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <>
      <div className="container pb-5">
        <div className="row d-flex justify-content-center mb-5 mt-5"><h1 className=''>To-Do List</h1></div>
        <form className="row d-flex justify-content-center mt-5 " onSubmit={this.addItem}>
        <input className="col-6 mr-3 form-control" type="text" id="todo" name="todo" value={this.state.currentItem.text} onChange={this.handleInput}/>
        <input className="col-2 btn btn-outline-dark" type="submit" value="Submit" />
        </form>
      </div>
      <ListItems items={this.state.items} deleteItem = {this.deleteItem} done={this.state.done}/>
      </>
    )
  }
}
