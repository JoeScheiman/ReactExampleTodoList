import React, { Component } from 'react';
import Addtodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends Component {
 
  constructor() {
   super();
   this.state = {
     currentItemText: "Hello",
     todos: ["Add a todo", "Remove Todos"] //TodoList: ["Add a todo" , "Remove Todos"]
   };
 };
 
 resetAll = () => {
   this.setState({currentItemText: "", todos: [] });
 };
 
 setText = (text) => {
   this.setState({currentItemText: text});
 };
 addNew = text => {
   const newTodos = [...this.state.todos, text];
   this.setState({todos: newTodos});
 }
 render() {
   return (
     <div>
       <Addtodo 
       text = {this.state.currentItemText} 
       setText={this.setText}
       addNew = {this.addNew}/>

       <TodoList todos={this.state.todos}/>
       
       <button onClick={this.resetAll}>Reset All</button>
     </div>
   );
 }
}

export default App;