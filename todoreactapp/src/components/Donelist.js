import React from 'react';
import Donetask from './Donetask';
const Donelist = (props) => {
    return (
        <div className='container'>
            <h1>Done</h1>
            <ul >
                {props.doneList.map(done => (
                    <Donetask key={done.id} done={done} title={done.title} inProgressList={props.inProgressList} setinProgressList={props.setinProgressList} doneList={props.doneList} setDoneList={props.setDoneList} setModalOpenE={props.setModalOpenE} modalOpenE={props.modalOpenE} />
                ))}
            </ul>
        </div>
    );

}
export default Donelist;