import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/actions.js';

import Filters from './Filters.js';
import Sorters from './Sorters.js';

class Footer extends Component {
    deleteCompleted = () => {
        this.props.todos
            .filter(todo => todo.completed)
            .forEach(todo => {
                this.props.deleteTodo(todo.id);
            });
    };

    markAllCompleted = () => {
        this.props.todos
            .filter(todo => !todo.completed)
            .forEach(todo => {
                this.props.toggleTodo(todo.id, false);
            });
    };

    render() {
        const { completed, left } = this.props.todos.reduce(
            (stats, todo) => {
                if (todo.completed) {
                    stats.completed++;
                } else {
                    stats.left++;
                }
                return stats;
            },
            {
                completed: 0,
                left: 0,
            }
        );
        return (
            <footer>
                <p className="stats">
                    {completed} completed, {left} left
                </p>
                <p>
                    <button
                        onClick={this.deleteCompleted}
                        disabled={completed === 0}
                    >
                        Clear completed
                    </button>
                </p>
                <p>
                    <button
                        onClick={this.markAllCompleted}
                        disabled={left === 0}
                    >
                        Complete all
                    </button>
                </p>
                <Filters />
                <Sorters />
            </footer>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect(
    mapStateToProps,
    { toggleTodo, deleteTodo }
)(Footer);
