import React from 'react'
import Card from '../UI/Card';
import TodoDate from './TodoDate';
import classes from './TodoItem.module.css';

export default function TodoItem(props) {
  return (
    <li>
        <Card className={classes.todoItem}>
            <TodoDate date={props.date} />
            <h2>{props.title}</h2>
            <div className={classes['todoItem-desc']}> 
                {props.desc}
            </div>
            <button className={classes.btn} type='submit'> Edit </button>
            <button className={classes.btn2} type='submit'> Delete </button>
        </Card>
    </li>
    
  )
}
