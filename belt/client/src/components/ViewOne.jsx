import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const ViewOne = (props) => {
    const navigate= useNavigate();

    const { id } = useParams();
    const [onePirate, setOnePirate] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(res => {
                setOnePirate(res.data);

            })
            .catch((err) => console.log(err))
    }, [id])



    return (
        <div>
            <div className='header'>
                <h1 className='name'>{onePirate.name}</h1>
            </div>
            <div className='box d-flex justify-content-between'>
                <div>
                    <img className='image' alt='img failed to load' style={{ height: 200, width: 300 }} src={onePirate.image} />
                    <h2>"{onePirate.phrase}"</h2>
                </div>
                <div className='mr-5'>
                    <h3>About</h3>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Position:</td>
                                <td>{onePirate.position}</td>
                            </tr>
                            <tr>
                                <td>Treasures:</td>
                                <td>{onePirate.chests}</td>
                            </tr>
                            <tr>
                                <td>Peg Leg:</td>
                                <td>{JSON.stringify(onePirate.traits) ? (onePirate.traits.pegLeg === true ? "Yes" : "No") : 'Null'}</td>
                                
                            </tr>
                            <tr>
                                <td>Eye Patch:</td>
                                <td>{JSON.stringify(onePirate.traits) ? (onePirate.traits.eyePatch === true ? "Yes" : "No") : 'Null'}</td>
                                
                            </tr>
                            <tr>
                                <td>Hook Hand:</td>
                                <td>{JSON.stringify(onePirate.traits) ? (onePirate.traits.hookHand === true ? "Yes" : "No") : 'Null'}</td>
                                
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default ViewOne;