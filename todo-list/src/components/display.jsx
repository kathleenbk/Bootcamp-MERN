import React from 'react';


const Display = (props) => {
    // console.log(props);
    let taskClass = ''
    if (props.task.complete) {
        taskClass += 'checked';
    }
    return (
        <div className='task'>
            <li className={taskClass + ' bold'}>{props.task.text}</li>
            <input checked={props.task.complete} onChange={(e) => {
                props.handleChecked(props.i);
            }} type='checkbox' className='checkbox'/>
            <button className='button' onClick={(e) => {
                props.handleDelete(props.i);
            }}>Delete</button>
        </div>
    )
};

export default Display;