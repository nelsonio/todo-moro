import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Todos.css';

import { connect } from 'react-redux';
import { fetchTodos } from '../../store/actions/';

import { sortFilter } from '../../tools/tools.js';

import NewTodo from './NewTodo.js';
import List from './List.js';
import Footer from '../Footer/Footer.js';
import Loader from '../Loader.js';

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

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    fetchTodos: PropTypes.func.isRequired,
};

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
