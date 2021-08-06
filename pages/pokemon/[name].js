const Pokemon = ({pokemon}) => {
    return(
        <div>
        <h1>pagina do pokemon {pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt="Pokemon front sprite" layout='fill' />
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
