import { useRouter } from 'next/router'

const Pokemon = () => {
    const router = useRouter()
    const { name } = router.query

    return(
        <div>pagina do pokemon {name}</div>
    )
};

export default Pokemon
