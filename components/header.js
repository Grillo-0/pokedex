import classe from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header(){
    return(
      <Link href="/">
      <a>
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
      </a>
      </Link>
    )
}
