import React from 'react';
import './style.css'

class TodoList extends React.Component{
    constructor() {
        super()
        this.state = { 
            id:0
         }
         this.deleteHandler = this.deleteHandler.bind(this)
         this.refreshPage = this.refreshPage.bind(this)
    }
    
    deleteHandler(event) {
        event.preventDefault()

        let dlink = 'https://todolist-react-backend.herokuapp.com/delete/'+this.props.id
        fetch(dlink)
        .then(
            response => response.json()
        )
        .then(data=>console.log(data))
    }

    refreshPage(){
        window.location.reload(false);
    }

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color : "blue",
            textDecoration: "line-through"
        }
        
        
        return(
            <div className ="todo-item" >

                <form onSubmit={this.deleteHandler} >
                
                    <input type="checkbox" checked={this.props.done} onChange={()=>this.props.handleChange(this.props.id)} />
                    <p style={this.props.done? completedStyle:null}>{this.props.content}</p>
                    <button type="submit" onClick={this.refreshPage}>Delete</button>
                    
                </form>
                
            </div>
        )
    }
}

export default TodoList