import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("None")
    const [errors, setErrors] = useState([]); 

    const positions = [
        'Forward',
        'Midfielder',
        'Defender',
        'Goalkeeper'
    ]

    const createPlayer = (e) => {
        e.preventDefault();
        const newPlayer = {
            name,
            position
        }

        axios.post("http://localhost:8000/api/players", newPlayer)
        .then((res) => {
            navigate("/players/list")
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
        <div className='main'>
            <div className='box'>

                <h2><Link to='/players/list'>List</Link>  |  <Link to='/players/addplayer'>Add Player</Link></h2>
                <div className='addBox'>
                    <form>
                        <h3 className='m-3'>Add Player</h3>
                        <p className='error'>{errors}</p>
                        <div className='form-group row'>
                            <p className='ml-5'>Player Name: <input onChange={(e) => setName(e.target.value)} value={name}/></p>
                            
                            
                        </div>
                        
                        <div className='form-group row'>
                        <p className='ml-5'>Preferred Position:</p>
                            <select onChange={(e) => setPosition(e.target.value)} value={position}>
                                {positions.map( (position, idx) => 
                                    <option key={idx} value={position}>{position}</option>
                                    )
                                }
                                <option value={'Forward'} >Forward</option>
                            </select>
                            
                        </div>
                        <button className='button' onClick={createPlayer}>Submit</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Create;