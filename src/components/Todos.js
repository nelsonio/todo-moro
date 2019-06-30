import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions.js';

import { filterTodos } from '../tools/filterTodos.js';

import NewTodo from './NewTodo.js';
import List from './List.js';
import Footer from './Footer.js';

class Todos extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return Array.isArray(this.props.todos) ? (
            <>
                <main>
                    <NewTodo />
                    <List todos={this.props.todos} />
                </main>
                <Footer />
            </>
        ) : (
            <main>Loading...</main>
        );
    }
}

const mapStateToProps = state => ({
    todos: filterTodos(state.todos, state.filter),
});

export default connect(
    mapStateToProps,
    { fetchTodos }
)(Todos);
