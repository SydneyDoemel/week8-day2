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
              key: ''
             
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
  sendCreateTodo = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/todo/create', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${this.props.user.token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            item: e.target.item.value
        })
    });
    const data = await res.json();
    console.log(data)
};

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
  // markDone = (key_) => {
  //   for (x in this.state.items){
  //     if (x.key=key_){
  //       this.setState({
  //         currentItem{
  //           done: true
  //         }
  //       })
  //     }
  //   }
    
  //   console.log(this.currentItem)
  // }
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
      <ListItems items={this.state.items} deleteItem = {this.deleteItem} />
      </>
    )
  }
}
