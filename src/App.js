import React from 'react';
import TodoList from './TodoList';
import TodoData from './TodoData'
import AddTask from './AddTask'

class App extends React.Component {

    constructor() {
        super ()
        this.state={
            todos: TodoData,
            items: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updateTodos = prevState.items.map(
                todo => {
                    if(todo.id === id){
                        todo.done = !todo.done    
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
    componentDidMount() {
        fetch('/send')
            .then(response => {return response.json()})
            .then(data=>
                {
                    this.setState({
                        items:data
                    })
                }
            )           
            
            
    }
    

    render() {
        
        

        // const todoitems = this.state.todos.map(
        //     item => {
        //         return(
        //             <TodoList key = {item.id} id={item.id} text={item.text} completed={item.completed} item = {item} handleChange={this.handleChange}/>
        //         )
        //     }
        // )
        const newitem = this.state.items.map(
            newitem =>{
                return (
                    // <div className = "todo-list">{newitem.content}</div>
                    <TodoList key={newitem.id} id = {newitem.id} content={newitem.content} done={newitem.done} newitem={newitem} handleChange={this.handleChange}/>
                )
            }
        )
        // console.log(this.state.items)
        
        return(
            <div>
                <h1 className="navbar">TODO-LIST</h1>
                <div className = "todo-list">
                    <AddTask />
                   {newitem}
                </div>
                
            </div>
        )
    }
}



export default App