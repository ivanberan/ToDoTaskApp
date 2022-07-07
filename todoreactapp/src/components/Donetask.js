import React, { useState } from 'react';
import DetailsModal from './DetailsModal';
const Donetask = (props) => {
    const [modalOpenE, setModalOpenE] = useState(false);
    const deleteHandler = () => {
        props.setDoneList(props.doneList.filter(el => el.id !== props.done.id))
    }
    const moveHandlerR = () => {
        props.setinProgressList([...props.inProgressList, { title: props.done.title, description: props.done.description, state: "inprogress", id: props.done.id }])
        props.setDoneList(props.doneList.filter(el => el.id !== props.done.id))
    }
    return (
        <div className='task-container'>
            {modalOpenE && <DetailsModal setModalOpenE={setModalOpenE} description={props.done.description} title={props.done.title} />}
            <li className='cont-div'>
                <div>
                    {props.done.title}
                </div>
                <div>
                    <button onClick={moveHandlerR} className='button-move'>◀ Move</button>
                    {<button onClick={() => { setModalOpenE(true); }} type="submit" className='button-details'>Details</button>}
                    <button onClick={deleteHandler} className='button-remove'>X</button>
                </div>
            </li>
        </div>
    );

}
export default Donetask;