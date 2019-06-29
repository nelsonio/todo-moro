import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions.js';

import NewTodo from './NewTodo.js';
import CurrentTodos from './CurrentTodos.js';
import Footer from './Footer.js';

class Todos extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return this.props.todos.length > 0 ? (
            <>
                <main>
                    <NewTodo />
                    <CurrentTodos todos={this.props.todos} />
                </main>
                <Footer />
            </>
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
    { fetchTodos }
)(Todos);
