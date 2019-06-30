import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../store/actions.js';

class NewTodo extends Component {
    state = {
        text: '',
    };

    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    handleKey = e => {
        const text = this.state.text.trimRight();

        if (e.key === 'Enter') {
            e.preventDefault();

            if (text.length > 0) {
                this.props.addTodo(text);
            }
            this.setState({ text: '' });
        }
    };

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Add new task"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKey}
                    className="new-todo"
                    id="new-todo"
                />
                <label htmlFor="new-todo">Press Enter to add</label>
            </form>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(NewTodo);
