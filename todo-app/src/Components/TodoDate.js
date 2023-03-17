import React from 'react';
import classes from './TodoDate.module.css';
import Card from '../UI/Card';

const TodoDate = (props) => {
    
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <Card className={classes['todo-date']}>
            <div className={classes.day}> {day} </div>
            <div className={classes.month}> {month} </div>
            <div className={classes.year}> {year} </div>
        </Card>
    )
};

export default TodoDate;
