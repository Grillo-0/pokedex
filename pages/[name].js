const Pokemon = ({pokemon}) => {
    return(
        <div className = "pokemonDescription">
        <h1>#{pokemon.id}: {pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt="Pokemon front sprite" layout='fill' />
        <img src={pokemon.sprites.back_default} alt="Pokemon back sprite" layout='fill' />

        <h3>Pokemon's Info:</h3>
        <br />
        
        <p>
            <b>Type: </b> 
            {pokemon.types.map( (type, index) => {
                return (<span>{index ? ', ' : ''} {type.type.name}</span>)
            })}
        </p>
        <br />

        <p>
            <b>Abilities:</b>
            <ul>
            {pokemon.abilities.map( ability => {
                return (<li>{ability.ability.name}</li>)
            })}
            </ul>
        </p>
        <br />

        <p>
            <b>Stats: </b>
            <ul>
            {pokemon.stats.map( stat => {
                return (<li>{stat.stat.name}: {stat.base_stat}</li>)
            })}
            </ul>
        </p>
        <br />

        <p>
            <b>Games: </b>
            {pokemon.game_indices.map( (game, index) => {
                return (<span>{index ? ', ' : ''} {game.version.name}</span>)
            })}
        </p>

        

        </div>
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
