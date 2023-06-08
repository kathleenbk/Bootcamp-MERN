import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = () => {

    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
        .then(res => {
            setPirates(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    const deletePirate = (deleteId) => {
        axios.delete('http://localhost:8000/api/pirates/' + deleteId)
        .then(res => {
            setPirates(pirates.filter( (pirate) => pirate._id !== deleteId))
        })
        .catch((err) => console.log(err))
    }


    return (
        <div>
            <div className='header d-flex justify-content-between'>
                <h1>Pirate Crew</h1>
                <button className='btn btn1'><Link className='link' to='/pirates/new'>Add Pirate</Link></button>
            </div>
            <div className='box'>


                {
                    pirates.sort((x, y)=> x.name.localeCompare(y.name)).map((pirate) => {
                        return(
                            
                            <div key={pirate._id} className='pirateCard d-flex justify-content-around mt-2'>
                                <div className='image'>
                                    <img className='image' alt='img failed to load' style={{height: 100, width:200}} src={pirate.image} />
                                </div>
                                <div>
                                    <div>
                                        <h3>{pirate.name}</h3>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <button className='mr-2 btn btn1'><Link className='link' to={'/pirates/' + pirate._id}>View Pirate</Link></button>
                                        <button className='btn btn2' onClick={() => {deletePirate(pirate._id)}}>Walk the Plank</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }




            </div>
        </div>
    )
}

export default Main;