import React from 'react';
import TaskInProgress from './TaskInProgress';
const InProgresslist = (props) => {
    return (
        <div className='container'>
            <h1>In Progress</h1>
            <ul >
                {props.inProgressList.map(inProgress => (
                    <TaskInProgress key={inProgress.id} todoList={props.todoList} setTodoList={props.setTodoList} inProgress={inProgress} title={inProgress.title} inProgressList={props.inProgressList} setinProgressList={props.setinProgressList} doneList={props.doneList} setDoneList={props.setDoneList} />
                ))}

            </ul>
        </div>
    );
}
export default InProgresslist;