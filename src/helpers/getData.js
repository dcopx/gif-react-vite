export const getData = async (category) => {
    const url = 'http://api.giphy.com/v1/gifs/search?'
    const apiKey = 'D9AmpFonhoO88TTiukzOGAPveWrldH5r'

    const resp = await fetch(`${url}api_key=${apiKey}&q=${category}&limit=10`)
    const { data } = await resp.json()
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))
    return gifs

}