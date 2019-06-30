import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, renameTodo } from '../../store/actions/';

import { Pen, Remove, Check, EmptyCircle, CheckedCircle } from '../Icons.js';

class Todo extends Component {
    state = {
        editable: false,
        content: '',
    };

    focusHere = React.createRef();

    componentDidMount() {
        this.setState({ content: this.props.todo.text });
    }

    componentDidUpdate() {
        if (this.focusHere.current !== null) {
            this.focusHere.current.focus();
        }
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

    focusLost = () => {
        this.renameTask();
        this.setState({ editable: false });
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
            <li className={completed && !editable ? 'completed' : ''}>
                <p onClick={this.toggleCompleted} className="toggler">
                    <input
                        type="checkbox"
                        defaultChecked={completed}
                        className="invisible-check"
                    />
                    {completed ? <CheckedCircle /> : <EmptyCircle />}
                </p>
                {editable ? (
                    <input
                        type="text"
                        value={content}
                        onChange={this.handleChange}
                        className="inline-text-input"
                        onKeyPress={this.handleKey}
                        onBlur={this.focusLost}
                        ref={this.focusHere}
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

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    renameTodo: PropTypes.func.isRequired,
};

export default connect(
    null,
    { toggleTodo, deleteTodo, renameTodo }
)(Todo);
