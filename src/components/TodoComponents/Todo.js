
import React, { Component } from 'react'


export default class Todo extends Component {
   render() {
      return (
         
      <div className={ this.props.todo.completed ? 'item': ""} onClick={(event)=>this.props.toggleTodo(event, this.props.todo.id)}> 
      

   
   
    
   <p>{this.props.todo.task}</p>
   
   
   </div>  
   );
};
         
      
   }



  
