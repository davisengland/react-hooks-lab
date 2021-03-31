import React, {useState, useEffect} from 'react'
import './App.css';
import PokemonList from './components/PokemonList'
import routes from './routes'

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;