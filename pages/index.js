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
      let aux = result.results.filter(pokemon => pokemon.name.includes(evt.target.value.toLowerCase()))
      setSearchResults(aux)
  }

  return (
    <main className='App'>
      <Header key="header"/>
      <div className='searchBar'>
          <TextField label="Pokémon" variant="outlined" value={value} onChange={filterSearch}/>  
      </div>  
      <div className='pokemonContainer'>
        {searchResults.map((pokemon) => {
            return (
                <Link href = {`/${pokemon.name}`} key={`${pokemon.name}link`}>
                   <a><Pokemon pokemon={pokemon} key={pokemon.name} /></a>
                </Link>
            )
        })}
      </div>
    </main>
  )
}
