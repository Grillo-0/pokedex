// index.js
 
import useFetchPokemon from '../api/useRequest'
import Pokemon from '../components/pokemon'
 
export default function IndexPage() {
  const { result, error } = useFetchPokemon()
 
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>
 
  return (
    <main className='App'>
      <h1>My pokemons</h1>
      <div>
        {result.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </main>
  )
}