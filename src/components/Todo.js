import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/actions.js';

class Todo extends Component {
    toggleCompleted = () => {
        const { id, completed } = this.props.todo;
        this.props.toggleTodo(id, completed);
    };

    deleteTask = () => {
        this.props.deleteTodo(this.props.todo.id);
    };

    render() {
        const { text, completed } = this.props.todo;
        return (
            <li className={completed ? 'completed' : ''}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={this.toggleCompleted}
                />
                {text}
                <button onClick={this.deleteTask}>X</button>
            </li>
        );
    }
}

export default connect(
    null,
    { toggleTodo, deleteTodo }
)(Todo);
