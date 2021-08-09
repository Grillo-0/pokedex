import useFetchPokemon from './api/useRequest'
import Pokemon from '../components/pokemonCard'
import classe from '../styles/Header.module.css'
import { TextField } from '@material-ui/core'
import { useState, useEffect } from 'react'
import theme from '../styles/theme'

export default function IndexPage() {
  const { result, error } = useFetchPokemon()
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setSearchResults(result ? result.results : searchResults);
  },[result])

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>
  let value;
  
  const filterSearch = (evt) => {
      let aux = result.results.filter(pokemon => pokemon.name.includes(evt.target.value))
      setSearchResults(aux)
      console.log(searchResults)
  }

  return (
    <main className='App'>
      <header className={classe.header}>
        <img
          className={classe.iconeImg}
          src="Icone.png"
          alt="Icone"
        />

        <img
          className={classe.pokedexImg}
          src="PokéDex.png"
          alt="PokéDex"
        />
      </header>
      <div className='searchBar'>
          <TextField  id="Pokémon" label="Pokémon" variant="outlined" autoFocus={true} value={value} onChange={filterSearch}/>  
      </div>  
      <div className='pokemonContainer'>
        {searchResults.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </main>
  )
}
