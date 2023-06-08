import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Planets = (props) => {
    const [planets, setPlanets] =useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data)
                setPlanets(response.data)
            }).catch(err => {
                console.log('You have reached an error!!!');
                console.log(err)});

    }, [id]);

    return (
        planets ? (
        <div>
            <h1>{planets.name}</h1>
            <div>
                <h3>Climate: {planets.climate}</h3>
                <h3>Terrain: {planets.terrain}</h3>
                <h3>Surface Water: {planets.surface_water}</h3>
                <h3>Population: {planets.population}</h3>
            </div>

        </div>
        ) : (
            <h1>Loading...</h1>
        )
    )
}

export default Planets;