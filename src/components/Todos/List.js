import React from 'react';

import Todo from './Todo.js';

const List = ({ todos }) => (
    <ul>
        {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
        ))}
    </ul>
);

export default List;
