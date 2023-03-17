import React from 'react'
import classes from './Todo.module.css';
import TodoItem from './TodoItem';

const Todo = (props) => {
  return (
    <ul className={classes.todo}>
      {
        props.items.map((item) => 
          <TodoItem
            key = {item.id}
            title = {item.title}
            desc = {item.desc}
            date = {item.date}
          />
        )
      }
    </ul>
  )
}

export default Todo;
