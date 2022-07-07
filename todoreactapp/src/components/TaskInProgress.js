import React, { useState } from 'react';
import DetailsModal from './DetailsModal';

const TaskInProgress = (props) => {
    const [modalOpenE, setModalOpenE] = useState(false);

    const deleteHandler = () => {
        props.setinProgressList(props.inProgressList.filter(el => el.id !== props.inProgress.id))
    }
    const moveHandler = () => {
        props.setDoneList([...props.doneList, { title: props.inProgress.title, description: props.inProgress.description, state: "done", id: props.inProgress.id }])
        props.setinProgressList(props.inProgressList.filter(el => el.id !== props.inProgress.id))

    }
    const moveHandlerR = () => {
        console.log(props.todoList)
        props.setTodoList([...props.todoList, { title: props.inProgress.title, description: props.inProgress.description, state: "todo", id: props.inProgress.id }])
        console.log(props.todoList)
        props.setinProgressList(props.inProgressList.filter(el => el.id !== props.inProgress.id))

    }
    return (
        <div className='task-container'>
            {modalOpenE && <DetailsModal setModalOpenE={setModalOpenE} description={props.inProgress.description} title={props.title} />}

            <li className='cont-div'>
                <div>
                    {props.title}
                </div>

                <div>
                    <button onClick={moveHandlerR} className='button-move'>◀ Move</button>
                    <button onClick={() => { setModalOpenE(true); }} type="submit" className='button-details'>Details</button>
                    <button onClick={deleteHandler} className='button-remove'>X</button>
                    <button onClick={moveHandler} className='button-move'>Move ▶</button>
                </div>

            </li>
        </div>
    );

}
export default TaskInProgress;