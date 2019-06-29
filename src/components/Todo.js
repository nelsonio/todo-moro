import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, renameTodo } from '../store/actions.js';

import { Pen, Remove, Check, EmptyCircle, CheckedCircle } from './Icons.js';

class Todo extends Component {
    state = {
        editable: false,
        content: '',
    };

    componentDidMount() {
        this.setState({ content: this.props.todo.text });
    }

    handleChange = e => {
        this.setState({ content: e.target.value });
    };

    renameTask = () => {
        const text = this.state.content.trimRight();

        if (text.length > 0) {
            this.props.renameTodo(this.props.todo.id, text);
        }
    };

    toggleEditable = () => {
        if (this.state.editable) {
            this.renameTask();
        }

        this.setState(prevState => ({
            editable: !prevState.editable,
        }));
    };

    handleKey = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.renameTask();
            this.setState(prevState => ({
                editable: !prevState.editable,
            }));
        }
    };

    toggleCompleted = () => {
        const { id, completed } = this.props.todo;
        this.props.toggleTodo(id, completed);
    };

    deleteTask = () => {
        this.props.deleteTodo(this.props.todo.id);
    };

    render() {
        const { completed } = this.props.todo;
        const { editable, content } = this.state;
        return (
            <li className={completed ? 'completed' : ''}>
                <p onClick={this.toggleCompleted} className="toggler">
                    <input type="checkbox" defaultChecked={completed} />
                    {completed ? <CheckedCircle /> : <EmptyCircle />}
                </p>
                {editable ? (
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={content}
                        className="inline-text-input"
                        onKeyPress={this.handleKey}
                    />
                ) : (
                    <span
                        className="todo-text"
                        onDoubleClick={this.toggleEditable}
                    >
                        {content}
                    </span>
                )}
                <button onClick={this.toggleEditable}>
                    {editable ? <Check /> : <Pen />}
                </button>
                <button onClick={this.deleteTask}>
                    <Remove />
                </button>
            </li>
        );
    }
}

export default connect(
    null,
    { toggleTodo, deleteTodo, renameTodo }
)(Todo);
