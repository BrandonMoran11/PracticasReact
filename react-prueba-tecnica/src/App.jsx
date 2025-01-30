import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}`
const CAT_PREFIX_CAT_IMAGE = 'https://cataas.com'
export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    //efecto para recuperar la cita al cargar la página
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)



            })
    }, [])

    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)
        console.log(fact)

        setImageUrl(`/cat/says/${threeFirstWords}?fontSize=50&color=red`)

    }, [fact])
    return (
        <main>
            <section>
                <h1>App de gatitos</h1>
                {fact && <p>{fact} </p>}
                {imageUrl && <img src={`${CAT_PREFIX_CAT_IMAGE}${imageUrl} `} alt={`image extracted using the first three words for ${fact}`} />}
            </section>

        </main>
    )
}