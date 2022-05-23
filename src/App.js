import { useEffect, useState } from 'react';
import './App.css';
import PokemonThumb from './components/PokemonThumb';

function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [button, setButton] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(button)
    const data = await res.json()
    
    setButton(data.next)
    
    function createPokemonObject (result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])
      })
        
      }
      createPokemonObject(data.results)
      await console.log(allPokemons)
    }
    useEffect(() => {
      getAllPokemons()
    }, [])
  

  

  return (
    <div className="app-container">
      <h1>Pokemon Codex</h1>
      <div className='pokemon-container'>
        <div className="all-container">
           {allPokemons.map( (pokemon, index) => 
            <PokemonThumb 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types[0].type.name}
            key={index}
            />
            )}
        </div>
        <button className="button">Load More</button>
      </div>
    </div>
  );
}

export default App;
