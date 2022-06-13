import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodoList } from "./components/TodoList";

const KEY = 'todoApp.todos';


export function App() {
    const [todos, setTodos] = useState([]);

    const todoTaskRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));

        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];

        const todo = newTodos.find((todo) => todo.id === id);

        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;

        if (task === '') return;

        const uuid = uuidv4().toString();

        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuid, task: task, completed: false }]
        });

        todoTaskRef.current.value = null;
    };

    const handleClear = () => {
        const newTodos = todos.filter((todo) => !todo.completed);

        setTodos(newTodos);
    };

    return (
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />

            <div className="new-task">
                <input className="new-task-name" ref={todoTaskRef} type="text" placeholder="New Task" />

                <div className="new-task-btns">
                    <button className="new-task-add" onClick={handleTodoAdd}>➕</button>

                    <button className="delete" onClick={handleClear}>DELETE COMPLETED TASKS</button>
                </div>

                <span className="tasks-left">You have <span>{todos.filter((todo) => !todo.completed).length}</span> tasks to complete</span>
            </div>
        </Fragment>
    )
}