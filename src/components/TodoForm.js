import React from "react";

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        
    }

    render() {
        return (
            <form>
                <input
                type='text'
                name='item'
                value={this.state.item}
                onChange={this.handleChange}/>
                
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;