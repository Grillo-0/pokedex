<<<<<<< HEAD
import React from 'react'
import { TextField, ImageList } from '@material-ui/core'
import Link from 'next/link';

export const getStaticProps = async() => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=200/');
    const data = await res.json();

    return{
        props: {pokemons: data}
    }
}

const Pokedex = ({pokemons}) => {
    return(
        <div>
            <TextField id="Pokémon" label="Pokémon" variant="outlined" autoFocus={true} style={{marginTop:"80px"}}/>

        {pokemons.results.map(pokemon =>(
            <div key = {pokemon.name}>
                <a>
                    <Link href = {`/pokemon/${pokemon.name}`}>
                      <a>{pokemon.name}</a>
                    </Link>
                </a>
            </div>
        ))}
        </div>
    );
};

export default Pokedex
=======
import useFetchPokemon from './api/useRequest'
import Pokemon from '../components/pokemonCard'
import classe from '../styles/Header.module.css'

export default function IndexPage() {
  const { result, error } = useFetchPokemon()
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

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

      <div className='pokemonContainer'>
        {result.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </main>
  )
}
>>>>>>> rubenzola
