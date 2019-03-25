import React, { Component } from "react";

class Addtodo extends Component {
    onAdd = () => {
        this.props.addNew(this.props.text);
        this.props.setText('');
        //Change the state in the parent component.
        //currentItemText 
    };
    onTextChange = event => {
        this.props.setText(event.target.value);
    };
    render() {
    const {text} = this.props;
    return (
        <>
        <label>
            Item :
            <input type="text" value={text} onChange={this.onTextChange}/>
        </label>
        <button onClick={this.onAdd}>ADD!</button>
     </>
   );
 }
}

export default Addtodo;