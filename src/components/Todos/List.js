import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo.js';

const List = ({ todos }) => (
    <ul className="todo-list">
        {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
        ))}
    </ul>
);

List.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
