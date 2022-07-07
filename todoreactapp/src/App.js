import './App.css';
import React, { useEffect, useState, useCallback } from 'react';
import Todolist from './components/Todolist';
import ToDoHeader from './components/ToDoHeader';
import Modal from './components/Modal';
import InProgresslist from './components/InProgresslist';
import Donelist from './components/Donelist';
function App(props) {

  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setinProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [db, setDb] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => setDb(data));
  }, []);

  const sort2 = () => {
    console.log(db)
    console.log()
    for (var i = 0; i < db.length; i++) {
      switch (db[i].state) {
        case 'todo':
           setTodoList([...todoList, db[i]]);
           break;
        case 'inprogress':
          setinProgressList([...inProgressList, db[i]]);
          break;
        case 'done':
          setDoneList([...doneList, db[i]]);
          break;
      }
    }
  }

  return (
    <div >
      <ToDoHeader />
      <button onClick={sort2} className="todo-header">Load data</button>
      <div className='rows'>
        <Todolist todoList={todoList} setTodoList={setTodoList} setModalOpen={setModalOpen} inProgressList={inProgressList} setinProgressList={setinProgressList} title={"To do Tasks"} />
        <InProgresslist todoList={todoList} setTodoList={setTodoList} inProgressList={inProgressList} setinProgressList={setinProgressList} doneList={doneList} setDoneList={setDoneList} />
        <Donelist inProgressList={inProgressList} setinProgressList={setinProgressList} doneList={doneList} setDoneList={setDoneList} />
        {modalOpen && <Modal setOpenModal={setModalOpen} todoList={todoList} setTodoList={setTodoList} />}

      </div>



    </div>
  );
}

export default App;
