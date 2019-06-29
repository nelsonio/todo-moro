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
        return Array.isArray(this.props.todos) ? (
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
