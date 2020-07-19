import React from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';



class App extends React.Component {
 
    constructor() {
        super ()
        this.state={
            
            items: [],
            id: 0
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
        fetch('https://todolist-react-backend.herokuapp.com/send')
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
        
        

        
        const newitem = this.state.items.map(
            newitem =>{
                return (

                    <TodoList key={newitem.id} id = {newitem.id} content={newitem.content} done={newitem.done} newitem={newitem} handleChange={this.handleChange} />
                    
                    
                )
            }
        )
       
        
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