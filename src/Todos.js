import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fillTodos } from './store/actions.js';

class Todos extends Component {
    componentWillMount() {
        this.props.fillTodos();
    }

    render() {
        return this.props.todos.length > 0 ? (
            <ul>
                {this.props.todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        ) : (
            'Loading...'
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect(
    mapStateToProps,
    { fillTodos }
)(Todos);
