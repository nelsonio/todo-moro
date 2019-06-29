import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fillTodos } from '../store/actions.js';

import NewTodo from './NewTodo.js';
import CurrentTodos from './CurrentTodos';

class Todos extends Component {
    componentDidMount() {
        this.props.fillTodos();
    }

    render() {
        return this.props.todos.length > 0 ? (
            <main>
                <NewTodo />
                <CurrentTodos todos={this.props.todos} />
            </main>
        ) : (
            <main>Loading...</main>
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
