import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'



class AddTask extends React.Component {
    constructor(){
        super();
        this.state={
            content: ''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler= this.submitHandler.bind(this)
        this.refreshPage = this.refreshPage.bind(this)
    }

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitHandler(event){
        event.preventDefault()
        console.log(this.state)
        let link = '/task/'+this.state.content
        console.log(link)
        fetch(link)
            .then(response=>{
                response.json()
            })
            .then(data => console.log(data))
        
    }

    refreshPage(){
        window.location.reload(false);
    }
    render(){

        const {content} = this.state
        
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name = "content" value={content} onChange={this.changeHandler}></input>
                    <button type="submit" onClick= {this.refreshPage}>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddTask