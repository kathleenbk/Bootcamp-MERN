import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {

    

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [chests, setChests] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("Captain");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    const [errors, setErrors] = useState([]); 


    const positions = [
        "Captain",
        "First Mate",
        "Quarter Master",
        "Boatswain",
        "Powder Monkey"
    ]

    const createPirate = (e) => {
        e.preventDefault();
        const newPirate = {
            name,
            image,
            chests,
            phrase,
            position,
            traits: {
                pegLeg,
                eyePatch,
                hookHand
            }
        }

        if(!newPirate.name || newPirate.name.length<3){
            alert("Name must be present and at least 3 characters!")
        }

        if(!newPirate.image || newPirate.image.length<3){
            alert("Image URL must be present and at least 3 characters!")
        }
        if(!newPirate.chests){
            alert("Please select number of treasure chests!")
        }
        if(!newPirate.phrase || newPirate.phrase.length<3){
            alert("Catch Phrase must be present and at least 3 characters")
        }

        axios.post("http://localhost:8000/api/pirates", newPirate)
            .then((res) => {
                navigate("/pirates")
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
        <div>
            <div className='header d-flex justify-content-between'>
                <h1>Add Pirate</h1>
                <button className='btn btn1'><Link className='link' to='/pirates'>Crew Board</Link></button>
            </div>
            <div className='box'>
            
            {
                errors.map((err, i ) =>{
                    return(
                        <li key={i}>{err}</li>
                    )
                })
            }
                <form className='d-flex justify-content-between p-5'>
                
                    <div>
                    
                        <div className='form-group'>
                            <label>Pirate Name:</label>
                            <input name='name' onChange={(e) => setName(e.target.value)} value={name} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Image Url:</label>
                            <input onChange={(e) => setImage(e.target.value)} value={image} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label># of Treasure Chests:</label>
                            <input onChange={(e) => setChests(e.target.value)} value={chests} type='number' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Pirate Catch Phrase:</label>
                            <input onChange={(e) => setPhrase(e.target.value)} value={phrase} className='form-control' />
                        </div>
                    </div>
                    <div>
                        <div className='form-group'>
                            <label>Crew Position:</label>
                            <select onChange={(e) => setPosition(e.target.value)} value={position} className='form-control' >
                                {positions.map((position, idx) =>
                                    <option key={idx} value={position}>{position}</option>
                                )}
                            </select>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' name='pegLeg' onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg} />
                            <label className='form-check-label' htmlFor='pegLeg'>Peg Leg</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' name='eyePatch' onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch} />
                            <label className='form-check-label' htmlFor='eyePatch'>Eye Patch</label>

                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' name='hookHand' onChange={(e) => setHookHand(e.target.checked)} checked={hookHand} />
                            <label className='form-check-label' htmlFor='hookHand'>Hook Hand</label>

                        </div>
                        <button className='btn btn1 create' onClick={createPirate}>Add Pirate</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create;