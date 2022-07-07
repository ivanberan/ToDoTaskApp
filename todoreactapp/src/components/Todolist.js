import React, { useState } from 'react';
import Task from './Task';

const Todolist = (props) => {
    return (
        <div className='container'>
            <h1>{props.title}</h1>
            <ul >
                {props.todoList.map(todo => (
                    <Task key={todo.id} todo={todo} description={todo.description} todoList={props.todoList} setTodoList={props.setTodoList} title={todo.title} inProgressList={props.inProgressList} setinProgressList={props.setinProgressList} />
                ))}
            </ul>
            <button onClick={() => {
                props.setModalOpen(true);
            }}
                type="submit">
                + Add another card
            </button>
        </div>
    );

}
export default Todolist;