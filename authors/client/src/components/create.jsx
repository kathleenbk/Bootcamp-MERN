import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = (props) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 

    const createAuthor = (e) => {
        e.preventDefault();

        const newAuthor = {
            name: name
        }

        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then((res) => {
                console.log(res.data);
                navigate("/authors")
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <div className='box'>
            {/* <p>{JSON.stringify(name)}</p> */}
            <Link to='/authors'>Home</Link>
            <h4>Add a new author</h4>
            <p className='error'>{errors}</p>
            <form className='form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' onChange={(e) => setName(e.target.value)} value={name} className='form-control'/>
                </div>
                <button className='action1'><Link to='/authors'>Cancel</Link></button><button onClick={createAuthor}>Submit</button>
            </form>
        </div>
    )
}

export default Create;