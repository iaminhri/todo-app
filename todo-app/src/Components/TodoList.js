import React from 'react'
import { useState } from 'react';
import TodoForm from './TodoForm';
import classes from './TodoList.module.css';

const TodoList = () => {
    const [formActive, setFormActive] = useState(false);
    
    const stopEditingHandler = () => {
        setFormActive(false);
    };

    const enableEditingHandler = () => {
        setFormActive(true);
    };

    return (
        <div className={classes.newTodo}>
            {
                !formActive && (
                    <button onClick={enableEditingHandler}>Add New Task</button>
                )
            }
            {
                formActive && (
                    <TodoForm onCancel={stopEditingHandler}/>
                )
            }
        </div>
    )
}

export default TodoList;
