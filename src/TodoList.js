import React from 'react';
import './style.css'
class TodoList extends React.Component{
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color : "blue",
            textDecoration: "line-through"
        }
        return(
            <div className ="todo-item">
                <input type="checkbox" checked={this.props.completed} onChange={()=>this.props.handleChange(this.props.id)} />
                <p style={this.props.completed? completedStyle:null}>{this.props.text}</p>
            </div>
        )
    }
}

export default TodoList