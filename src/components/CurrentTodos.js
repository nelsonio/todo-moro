import React from 'react';

const CurrentTodos = ({ todos }) => (
    <ul>
        {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
);

export default CurrentTodos;
