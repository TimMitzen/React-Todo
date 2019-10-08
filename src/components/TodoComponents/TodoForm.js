import React, { Component } from 'react'

class TodoForm extends Component {
   constructor(props){
      super();
      this.state = {
         value:""

      }
   }

   handleChange = (event) =>{
      this.setState({
         value: event.target.value
      })
   }
   handleSubmit = (event) => {
      event.preventDefault()
      this.props.addList(event, this.state.value)

      this.setState({
         value: ""
      })
   }
  
   
   
  
   render() {
      return (
         <form onSubmit={this.handleSubmit} >
            <input type ='text' 
            value={this.state.value} 
            onChange={this.handleChange}/>
            
            <button>Submit</button>
            <button className ='clr-btn' onClick={this.props.clearCompleted}>
      Clear Items
      </button>
         </form>
         

      );
   }
}

export default TodoForm;
