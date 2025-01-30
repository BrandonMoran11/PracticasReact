import { useEffect, useState } from "react";
const CAT_PREFIX_CAT_IMAGE = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)
        console.log(fact)

        setImageUrl(`/cat/says/${threeFirstWords}?fontSize=50&color=red`)

    }, [fact])

    return {
        imageUrl: `${CAT_PREFIX_CAT_IMAGE}${imageUrl}`
    }

}