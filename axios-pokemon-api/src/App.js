import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data.results);
      })
      .catch( someErr => console.log(someErr));
  };
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>

      {pokemon.map((pokemon, index) => {
        return <li>{pokemon.name}</li>;
      })}
    </div>
  );
}

export default App;
