import React from "react";

class SearchForm extends React.Component {

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
        this.props.filterSearch(this.state.item);
    };

    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                name='item'
                placeholder='Enter search terms'
                value={this.state.item}
                onChange={this.handleChange}/>
                <label htmlFor='item'>- Search</label>
            </form>
        )
    }
}

export default SearchForm;