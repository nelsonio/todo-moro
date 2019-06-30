import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodosMain.css';

import { connect } from 'react-redux';
import { fetchTodos } from '../../store/actions/';

import { sortFilter } from '../../tools/tools.js';

import NewTodo from './NewTodo.js';
import List from './List.js';
import Footer from '../Footer/Footer.js';
import Loader from '../Loader.js';
import ErrorInfo from './ErrorInfo.js';

class TodosMain extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const { todos, errors } = this.props;

        return Array.isArray(todos) ? (
            <React.Fragment>
                <main>
                    <NewTodo />
                    <List todos={todos} />
                </main>
                {errors.any ? (
                    <ErrorInfo description={errors.description} />
                ) : (
                    <Footer />
                )}
            </React.Fragment>
        ) : (
            <main>
                {errors.any ? (
                    <ErrorInfo description={errors.description} />
                ) : (
                    <Loader />
                )}
            </main>
        );
    }
}

TodosMain.propTypes = {
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
)(TodosMain);
