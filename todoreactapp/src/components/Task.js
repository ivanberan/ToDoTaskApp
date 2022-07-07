import React, { useState } from 'react';
import DetailsModal from './DetailsModal';
const Task = (props) => {
    const [modalOpenE, setModalOpenE] = useState(false);

    const deleteHandler = () => {
        props.setTodoList(props.todoList.filter(el => el.id !== props.todo.id))
    }
    const moveHandler = () => {
        props.setinProgressList([...props.inProgressList, { title: props.todo.title, description: props.todo.description, state: "inprogress", id: props.todo.id }])
        props.setTodoList(props.todoList.filter(el => el.id !== props.todo.id))

    }
    return (
        <div className='task-container'>
            {modalOpenE && <DetailsModal setModalOpenE={setModalOpenE} description={props.description} title={props.title} />}
            <li className='cont-div'>
                <div>
                    {props.todo.title}
                </div>
                <div>
                    <button onClick={() => { setModalOpenE(true); }} type="submit" className='button-details'>Details</button>
                    <button onClick={deleteHandler} className='button-remove'>X</button>
                    <button onClick={moveHandler} className='button-move'>Move ▶</button>
                </div>
            </li>
        </div>
    );

}
export default Task;