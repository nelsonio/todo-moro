import React from 'react';

import Todo from './Todo.js';

const CurrentTodos = ({ todos }) => (
    <ul>
        {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
        ))}
    </ul>
);

export default CurrentTodos;
