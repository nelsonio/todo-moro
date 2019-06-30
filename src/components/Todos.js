import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions.js';

import { sortFilter } from '../tools/tools.js';

import NewTodo from './NewTodo.js';
import List from './List.js';
import Footer from './Footer.js';
import Loader from './Loader';

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
            <main>
                <Loader />
            </main>
        );
    }
}

const mapStateToProps = state => ({
    todos: sortFilter(
        state.todos,
        state.filter,
        state.sorter.type,
        state.sorter.desc
    ),
});

export default connect(
    mapStateToProps,
    { fetchTodos }
)(Todos);
