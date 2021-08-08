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
