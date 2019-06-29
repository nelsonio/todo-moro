import React, { Component } from 'react';

class NewTodo extends Component {
    state = {
        text: '',
    };

    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    handleKey = e => {
        var key = e.key || e.keyCode;

        if (key === 'Enter' || key === 13) {
            this.setState({ text: '' });
        }
    };

    render() {
        return (
            <input
                type="text"
                placeholder="Add new task"
                onChange={this.handleChange}
                value={this.state.text}
                onKeyDown={this.handleKey}
            />
        );
    }
}

export default NewTodo;
