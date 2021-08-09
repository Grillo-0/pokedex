const Pokemon = ({pokemon}) => {
    return(
        <div>
        <h1>pagina do pokemon {pokemon.name} com o id {pokemon.id}</h1>
        <img src={pokemon.sprites.front_default} alt="Pokemon front sprite" layout='fill' />
        <img src={pokemon.sprites.back_default} alt="Pokemon back sprite" layout='fill' />
      <span className='Card--details'>
        {pokemon.types.map((poke) => poke.type.name).join(', ')}
      </span>
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
