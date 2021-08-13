import Header from '../components/header'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React from 'react';
import TabPanel from '../components/tabPanel';


const Pokemon = ({pokemon}) => {
    const [value, setValue] = React.useState(1);

    const selectTab = (event,NewValue) => {
        setValue(NewValue)
    }
    return(
        <main className="App">
            <head>
                 <title>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</title>
            </head>
            <Header/>
            <div className="PokeNameTag">
                <div  className="NameType">
                    <h1>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h1>
                    {pokemon.types.map( (type, index) => {
                        return (<span>{index ? ', ' : ''} {type.type.name}</span>)
                    })}
                </div>
                <h1 id="pokeid">#{pokemon.id}</h1>
                <img src={pokemon.sprites.front_default} alt="Pokemon front sprite" layout='fill' />
            </div>
            <div className = "pokemonDescription">
        <AppBar position="static">
          <Tabs value={value} onChange={selectTab} aria-label="simple tabs example">
            <Tab label="Status"/>
            <Tab label="Info"/>
            <Tab label="Games"/>
            <Tab label="Abilities"/>
          </Tabs>
        </AppBar>
            <TabPanel value={value} index={0}>
                {pokemon.stats.map( stat => {
                    return (<h4>{stat.stat.name}: {stat.base_stat}</h4>)
                })}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h3>height:{(pokemon.height/10).toPrecision(2)}m</h3>
                <h3>weight:{(pokemon.weight*0.1).toPrecision(2)}kg</h3>
                <h3>Base experience:{(pokemon.base_experience).toPrecision(2)}Xp</h3>
            </TabPanel>
            <TabPanel value={value} index={2}>
                {pokemon.game_indices.map( (game, index) => {
                    return (<span>{index ? ', ' : ''} {game.version.name}</span>)
                })}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {pokemon.abilities.map( ability => {
                    return (<h3>{ability.ability.name}</h3>)
                })}
            </TabPanel>
            </div>
        </main>
    )
};

export async function getStaticPaths() {
    const countRes = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const countData = await countRes.json()
    const count = countData.count

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}/`);
    const data = await res.json();
    
    const paths = data.results.map((pokemon) => ({
        params: {name : pokemon.name},
    }))

    return{paths,fallback: false}
}

export async function getStaticProps({params}){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    const pokemon = await res.json()

    return{
        props: {pokemon}
    }
}

export default Pokemon
