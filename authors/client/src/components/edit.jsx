import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useParams, Link } from "react-router-dom"

const Edit = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
        .then((res) => {
            console.log(res.data);
            setName(res.data.name);
        })
        .catch((err) => console.log(err))
    }, [id])

    const updateAuthor = (e) => {
        e.preventDefault();

        const updatedAuthor = {
            name: name,
        }

        axios.put('http://localhost:8000/api/authors/' + id, updatedAuthor)
        .then((res) => {
            console.log(res.data);
            navigate('/authors')
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
            <h4>Edit this author</h4>
            <p className='error'>{errors}</p>
            <form className='form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' onChange={(e) => setName(e.target.value)} value={name} className='form-control' />
                </div>
                <button className='action1'><Link to='/authors'>Cancel</Link></button><button onClick={updateAuthor}>Submit</button>
            </form>
        </div>
    )
}

export default Edit;