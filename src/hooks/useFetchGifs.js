import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/getData'

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGifs = async () => {
        const newGifs = await getData(category)
        setGifs(newGifs)
        setIsLoading(false)
    }
    useEffect(() => { getGifs() }, [])

    return { gifs, isLoading }
}
