import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const People = (props) => {
    const [person, setPerson] =useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data)
                setPerson(response.data)
            }).catch(err => {
                console.log('You have reached an error!!!');
            })

    }, [id]);

    return (
        person ? (
        <div>
            <h1>{person.name}</h1>
            <div>
                <h3>Height: {person.height}</h3>
                <h3>Mass: {person.mass}</h3>
                <h3>Hair Color: {person.hair_color}</h3>
                <h3>Skin Color: {person.skin_color}</h3>
            </div>

        </div>
        ) : (
            <h1>Loading...</h1>
        )
    )
}

export default People;