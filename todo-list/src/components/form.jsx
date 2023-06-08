import React, {useState} from 'react';


const Form = (props) => {
    return(
        <div>
            <form onSubmit={(e) => {
                props.handleSubmit(e);
            }}>
                <input type='text' onChange={(e) => {
                    props.setNewTask(e.target.value);
                }} value={props.newTask} />
                <input type='submit' value='Add' />
            </form>
        </div>
    )

}
export default Form;