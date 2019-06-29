import React, { Component } from 'react';

import { connect } from 'react-redux';

class Footer extends Component {
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
                {completed} completed, {left} left
            </footer>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect(
    mapStateToProps,
    {}
)(Footer);
