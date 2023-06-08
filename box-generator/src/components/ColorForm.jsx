import React, { useState } from 'react';

const ColorForm = (props) => {
    const [newColor, setNewColor] = useState("");

    function newBox(e) {
        e.preventDefault();
        props.setBoxes([...props.boxes, newColor]);
        setNewColor("");
    }
    return (
        <div>
            <form onSubmit={(e) => newBox(e)} className='form'>
                <div>
                    <label className='bold'>Color</label>
                    {/* the event is the changing value, the target is the input, and the value is the value of what is put in the input box */}
                    <input onChange={(e) => { setNewColor(e.target.value) }} type="text" className='margins input' value={newColor} />
                    <input type='submit' value='Add' className='margins button' />
                </div>
            </form>
            
        </div>
        
    )
}
export default ColorForm;