import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoMain.css';

import { connect } from 'react-redux';
import { fetchTodos } from '../../store/actions/';

import { sortFilter } from '../../tools/tools.js';

import NewTodo from './NewTodo.js';
import List from './List.js';
import Footer from '../Footer/Footer.js';
import Loader from '../Loader.js';
import ErrorInfo from './ErrorInfo.js';

class TodoMain extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return Array.isArray(this.props.todos) ? (
            <React.Fragment>
                <main>
                    <NewTodo />
                    <List todos={this.props.todos} />
                </main>
                {this.props.errors.any ? (
                    <ErrorInfo description={this.props.errors.description} />
                ) : (
                    <Footer />
                )}
            </React.Fragment>
        ) : (
            <main>
                {this.props.errors.any ? (
                    <ErrorInfo description={this.props.errors.description} />
                ) : (
                    <Loader />
                )}
            </main>
        );
    }
}

TodoMain.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    fetchTodos: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    todos: sortFilter(
        state.todos,
        state.filter,
        state.sorter.type,
        state.sorter.desc
    ),
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    { fetchTodos }
)(TodoMain);
