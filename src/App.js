import React from 'react';
import TodoList from './TodoList';
import TodoData from './TodoData'

class App extends React.Component {

    constructor() {
        super ()
        this.state={
            todos: TodoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updateTodos = prevState.todos.map(
                todo => {
                    if(todo.id === id){
                        todo.completed = !todo.completed    
                    }
                    return todo;
                }
            )
            return{
                todos: updateTodos
            }
        }
        )
    }

    render() {

        const todoitems = this.state.todos.map(
            item => {
                return(
                    <TodoList key = {item.id} id={item.id} text={item.text} completed={item.completed} item = {item} handleChange={this.handleChange}/>
                )
            }
        )
        return(
            <div>
                <h1 className="navbar">TODO-LIST</h1>
                <p className = "todo-list">{todoitems}</p>
            </div>
        )
    }
}



export default App