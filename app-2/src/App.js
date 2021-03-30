import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Pokemon from './components/Pokemon'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => setPokemon(res.data.results))
  }, [])

  return (
    <div className="App">
      <Pokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;
