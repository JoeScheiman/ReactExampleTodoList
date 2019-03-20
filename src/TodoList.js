import React, { Component } from "react";

class TodoList extends Component {
 render() {
     const {todos} = this.props;
     //const todos = this.props.todos; same as above
     // ["foo", "bar", "baz"]
     //should become:
     //<li>foo</li><li>bar</li><li>baz</li>
     const todoListItems = todos.map((item) => <li key={item}>{item}</li>);
   return (
     <ul>
       {todoListItems}
     </ul>
   );
 }
}

export default TodoList;