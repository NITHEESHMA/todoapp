import React, { Component } from 'react'
import './todoapp.css'
 class Todoapp extends Component {

state={
    input:"",
    items:[]
};
handleChange=(event)=>{
    this.setState({
        input:event.target.value
    });
    

};

storeItem=event=>{
    event.preventDefault();//form refresh agilla
    const{input}=this.state;
  //  const allItem=this.state.items;
   // allItem.push(input);
    this.setState({
       // items:allItem
       items:[...this.state.items,input],
       input:""
    });
};

deleteItem=(key)=>{
   // const allItem=this.state.items;
   // allItem.splice(key,1);
    this.setState({
        //items:allItem
        items:this.state.items.filter((data,index)=>index!==key)
    })

}

  render() {
      const{input,items}=this.state;
      console.log(items);
    return (
        <div className='todo-container'>
        <form onSubmit={this.storeItem}>
        <h1>Todoapp</h1>
      <div className='input-section'>
      <input type="text"
      value={input}
      //value={this.state.input}
       onChange={this.handleChange} 
       placeholder='enter items'/>
      <button>add</button>
      </div>

      <ul>
      {items.map((data,index)=>(
          <li key={index}>
          {data}<i className="fa fa-trash"  onClick={()=>{this.deleteItem(index)}} aria-hidden="true"></i>
          </li>
      ))}

      
      </ul>
      </form>
      </div>
    )
  }
}

export default Todoapp;