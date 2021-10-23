import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext';
const ItemCount = ({ stock, producto }) => {
    const { addToCart } = useContext(CartContext)

    const [items, setItems] = useState(1);

    function agregar() {
        console.log(items)
        console.log(stock)
        if (items < stock) { setItems(items + 1) }
    }

    function remover() {
        if (items > 1) { setItems(items - 1) }
    }

    function addCarrito() { }


    return (
        <div>

            <div>
                <button className="btn btn-primary" onClick={agregar} >Sumar</button>
                <button className="btn btn-secondary" onClick={remover} >Quitar</button>
                <div>
                    <text> Quiero comprar: {items}</text>
                </div>
                <div>
                    <button onClick={() => addToCart(producto)} className="btn btn-success my-2">Agregar al Carrito</button>
                </div>

            </div>




        </div >
    )
}

export default ItemCount
