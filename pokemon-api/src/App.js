import React, {useState} from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then( someResponse => {
      return someResponse.json();
    }).then( someOtherResponse => {
      console.log(someOtherResponse.results);
      setPokemon(someOtherResponse.results);
    }).catch( someErr => console.log(someErr))
  };
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
    
    {
      pokemon.map((pokemon, index) => {
      return (
        <li>{pokemon.name}</li>
      )
    })}
    </div>
)}

export default App;
