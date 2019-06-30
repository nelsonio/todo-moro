import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../store/actions.js';

import Stats from './Stats.js';
import Filters from './Filters.js';
import Sorters from './Sorters.js';

class Footer extends Component {
    state = {
        completed: 0,
        left: 0,
    };

    calculateStats = () => {
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

        return { completed, left };
    };

    componentDidMount() {
        const stats = this.calculateStats();
        this.setState(stats);
    }

    componentDidUpdate(pp, prevState) {
        const stats = this.calculateStats();

        if (
            stats.completed !== prevState.completed ||
            stats.left !== prevState.left
        ) {
            this.setState(stats);
        }
    }

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
        const { completed, left } = this.state;

        return (
            <footer>
                <Stats completed={completed} left={left} />

                <button
                    onClick={this.deleteCompleted}
                    disabled={completed === 0}
                >
                    Remove completed
                </button>

                <button onClick={this.markAllCompleted} disabled={left === 0}>
                    Complete all
                </button>

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