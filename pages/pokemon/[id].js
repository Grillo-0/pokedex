import { useRouter } from 'next/router'

const Pokemon = () => {
    const router = useRouter()
    const { id } = router.query

    return(
        <div>pagina do pokemon {id}</div>
    )
};

export default Pokemon
