import React from 'react'
import { useParams } from 'react-router'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Categoria = () => {
    const {categoria} = useParams()
    return (
        <div>
            <ItemListContainer categoria={categoria}/>
        </div>
    )
}

export default Categoria
