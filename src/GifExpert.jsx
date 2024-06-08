import { useState } from 'react'
import { AddCategoryInput } from './components/AddCategoryInput'
import { GifGrid } from './components/GifGrid'

export const GifExpert = () => {

    const [categories, setCategories] = useState(['detroit: become human'])

    const onAddCategory = (categorie) => {
        if (categories.includes(categorie)) return;
        setCategories([categorie, ...categories])
    }
    const onButtonAddCategory = () => {
        setCategories(['valorant', ...categories])
    }
    return (
        <>
            <h1>GifExpert</h1>
            <AddCategoryInput onAddCategory={onAddCategory} />
            <button onClick={onButtonAddCategory}>Agregar</button>

            {
                categories.map(categorie => {
                    return (<GifGrid key={categorie} category={categorie} />)
                })
            }
        </>
    )
}
