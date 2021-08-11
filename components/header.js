import classe from '../styles/Header.module.css'

export default function Header(){
    return(
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
    )
}
