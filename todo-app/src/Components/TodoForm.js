import React from 'react'
import classes from './Form.module.css';

const TodoForm = (props) => {

  const addTodoHandler = () =>{
    
  };

  return (
    <div className={classes.content}>
      <h1> TodoList </h1>
      <div className={classes.formField}>
        <div className={classes.form}>
            <label>Add Tasks</label>
           <input type="text" placeholder="Your Tasks"/>
        </div>

        <div className={classes.form}>
          <label>Description</label>
          <input type="text" placeholder="Task Description"/>
        </div>
        
        <div className={classes.form}>
          <label>Date</label>
          <input type="date" min="2023-01-01" />
        </div>        
      </div>
      <div className={classes.actions}>
          <button type='submit' onClick={addTodoHandler}> Add </button>
          <button type='submit' onClick={props.onCancel}> Cancel </button>
      </div>
    </div>
  )
}

export default TodoForm;