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
          className='iconeImg'
          src="Icone.png"
          alt="Icone"
        />

        <img
          className='pokedexImg'
          src="PokéDex.png"
          alt="PokéDex"
          width="500"
          height="600"
        />
      </header>

      <div>
        {result.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </main>
  )
}