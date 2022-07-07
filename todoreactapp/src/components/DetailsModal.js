import React, { useState } from "react";
import "../App.css";
const DetailsModal = (props) => {


    const submitHandler = (e) => {
        props.setModalOpenE(false);
    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <h3>
                    Task
                </h3>
                <div className="input-task" >
                    {props.title}
                </div>
                <h3>Description</h3>
                <div className="input-task" >
                    {props.description}
                </div>
                <div className="footer">
                    <button onClick={submitHandler}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default DetailsModal;