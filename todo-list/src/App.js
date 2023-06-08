import React, { useState } from 'react';
import Display from './components/display';
import Form from './components/form'
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.length===0){
            return;
        }

        const taskItem = {
            text: newTask,
            complete: false
        }

        setTasks([...tasks, taskItem]);
        setNewTask('');
    };
    const handleDelete=(indexToDelete)=>{
        const filteredTasks = tasks.filter((_task, i) => {
            return i !==indexToDelete;
        });

        setTasks(filteredTasks);

    };
    const handleChecked = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (index === i) {
                task.complete= !task.complete;
                
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className='main-container'>
            <Form handleSubmit={handleSubmit} setNewTask={setNewTask} newTask={newTask}/>
            {tasks.map((task, i) => {

                
                return( 
                <Display key={i} i={i} task={task} handleChecked={handleChecked} handleDelete={handleDelete}/>
                )
            })}
        </div>
    );
}

export default App;
