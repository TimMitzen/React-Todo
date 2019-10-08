// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from '../TodoComponents/Todo'



export class TodoList extends Component {
   render() {
      return (
         <div>
           {this.props.todoList.map(item =>{
              return <Todo toggleTodo={this.props.toggleTodo} 
              todo={item}/>;
           })} 
         </div>
      )
   }
}

export default TodoList
