import { useState } from 'react'

export const AddCategoryInput = ({ onAddCategory }) => {
    const [value, setValue] = useState('')
    const onValueChange = ({ target }) => {
        setValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if (value.trim().length <= 1) return;
        onAddCategory(value)
        setValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="buscar" value={value} onChange={onValueChange} />
        </form>
    )
}
