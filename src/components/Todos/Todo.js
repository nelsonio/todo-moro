import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, renameTodo } from '../../store/actions/';

import { Pen, Remove, Check } from '../Icons.js';
import Checkbox from './Checkbox.js';
import TodoText from './TodoText.js';

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
        // makes editable task active immediately
        if (this.focusHere.current !== null) {
            this.focusHere.current.focus();
        }
    }

    handleChange = e => {
        this.setState({ content: e.target.value });
    };

    renameTask = () => {
        // removes spaces from end so just spaces or empty can't be sent
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
                <Checkbox
                    toggleCompleted={this.toggleCompleted}
                    completed={completed}
                />
                <TodoText
                    editable={editable}
                    content={content}
                    handleChange={this.handleChange}
                    handleKey={this.handleKey}
                    focusLost={this.focusLost}
                    focusHere={this.focusHere}
                    toggleEditable={this.toggleEditable}
                />
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
