import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleTodo } from '../store/actions.js';

class Todo extends Component {
    handleToggle = () => {
        const { id, completed } = this.props.todo;
        this.props.toggleTodo(id, completed);
    };

    render() {
        const { text, completed } = this.props.todo;
        return (
            <li className={completed ? 'completed' : ''}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={this.handleToggle}
                />
                {text}
            </li>
        );
    }
}

export default connect(
    null,
    { toggleTodo }
)(Todo);
