import React from 'react';
import data from './data.js';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo.js';
import './components/TodoComponents/Todos.css'
import TodoList from './components/TodoComponents/TodoList'

  class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = { //this is state
      todoLists: data
    }
  }

  toggleTodo = (event, todoId) => {
    event.preventDefault();
    this.setState({

      todoLists: this.state.todoLists.map(todo => {
        if(todo.id === todoId){
          return {
            ...todo,
            completed: !todo.completed
          }

        }else{
          return todo;
        }
      })
    })
  }

  clearCompleted = (event) =>{
    event.preventDefault()
    this.setState({
      todoLists: this.state.todoLists.filter( todo =>{
        return !todo.completed;
      })
    })
  }

  addList = (event, todoItem) =>{
    const newList = {
      id: Date.now(),
      task: todoItem,
      completed: false
    }

    this.setState({
      todoLists: [newList, ...this.state.todoLists]
    })
  }

  render() {
    return (
      <div className ='Todo'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addList={this.addList} clearCompleted={this.clearCompleted}/>
        </div>
      
      <div className='list'>
      <TodoList toggleTodo={this.toggleTodo} todoList={this.state.todoLists}/>
      
      
      </div>
      </div>
    );
  }
}

export default App;

