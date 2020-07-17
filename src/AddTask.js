import React from 'react';

class AddTask extends React.Component {
    render() {
        return(
            <div>
                <form style={{display: 'flex'}}>
                    <input type="text" name="task name" placeholder="task"></input><br />
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddTask