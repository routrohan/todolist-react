import React from 'react';

class AddTask extends React.Component {
    

    
    
    render() {
        function submitbutton(){
            
            fetch('/task/')
         }
        return(
            <div>
                <form style={{display: 'flex'}} method="GET">
                    <input id="taskname" type="text" name="task_name" placeholder="task"></input><br />
                    <input type="submit" name="submit" value="Submit" onClick={submitbutton()}/>
                </form>
            </div>
        )
    }
}

export default AddTask