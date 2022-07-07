import React, { useState } from "react";
import "../App.css";
const Modal = (props) => {

    const [todoTask, setTodoTask] = useState("");
    const [todoDescription, setTodoDescription] = useState("")

    const taskNameHandler = (e) => {
        setTodoTask(e.target.value)
    }
    const descriptionHandler = (e) => {
        setTodoDescription(e.target.value)

    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.setTodoList([
            ...props.todoList, { title: todoTask, description: todoDescription, state: "todo", id: Math.random() * 100000 }
        ]);
        setTodoTask("");
        setTodoDescription("")
        //props.setOpenModal(false);
    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            props.setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                {props.todoTask}
                <div >
                    <input value={todoTask} onChange={taskNameHandler} className="input-task" placeholder="Enter Task"></input>
                </div>
                <div >
                    <textarea value={todoDescription} onChange={descriptionHandler} className="input-task" placeholder="Enter Description"></textarea>
                </div>
                <div className="footer">
                    <button onClick={submitHandler}>Add task</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;