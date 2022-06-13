import React from 'react'

import { TodoItem } from './TodoItem'

export function TodoList({ todos, toggleTodo }) {
    return (
        <ul className='todo-list'>
            {
                todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                })
            }
        </ul>
    )
}
