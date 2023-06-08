import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = (props) => {
    let navigate=useNavigate();
    const [category, setCategory] = useState('people');
    const [number, setNumber] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/${category}/${number}`);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>

                    <label htmlFor='category'>Search For: </label>
                    <select name='category' onChange={e=> setCategory(e.target.value)}>
                        <option value='people'>People</option>
                        <option value='planets'>Planets</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='id'>ID: </label>
                    <input type='number' name='id' onChange={e=> setNumber(e.target.value)}/>
                </div>
                <div>
                    <input type='submit' value='Search' />
                </div>

            </form>
        </div>
    )
}

export default SearchForm;