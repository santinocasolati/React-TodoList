import React from 'react'

export function TodoItem({ todo, toggleTodo }) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return (
        <li className='todo-item'>
            <span>{task}</span>

            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
        </li>
    )
}
