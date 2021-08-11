import useFetchPokemon from './api/useRequest'
import Header from '../components/header'
import Pokemon from '../components/pokemonCard'
import { TextField } from '@material-ui/core'
import { useState, useEffect } from 'react'
import Link from 'next/link'

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
      <Header/>
      <div className='searchBar'>
          <TextField  id="Pokémon" label="Pokémon" variant="outlined" autoFocus={true} value={value} onChange={filterSearch} style={{width:"90%"}}/>  
      </div>  
      <div className='pokemonContainer'>
        {searchResults.map((pokemon) => {
            console.log(pokemon.name)
            return (
                <Link href = {`/${pokemon.name}`}>
                   <a><Pokemon pokemon={pokemon} key={pokemon.name} /></a>
                </Link>
            )
        })}
      </div>
    </main>
  )
}
