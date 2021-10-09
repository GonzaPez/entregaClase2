import React, { useState } from 'react'

const ItemCount = ({ stock, addCarrito }) => {


    const [items, setItems] = useState(1);

    function agregar() {
        console.log(items)
        console.log(stock)
        if (items < stock) { setItems(items + 1) }
    }

    function remover() {
        if (items > 1) { setItems(items - 1) }
    }

    function addCarrito(){}


    return (
        <div>

            <div>
                <button class="btn btn-primary" onClick={agregar} >Sumar</button>
                <button class="btn btn-secondary" onClick={remover} >Quitar</button>
                <div>
                    <text> Quiero comprar: {items}</text>
                </div>
                <div>
                <button onClick={addCarrito(items)} className="btn btn-success my-2">Agregar al Carrito</button>
                </div>

            </div>




        </div >
    )
}

export default ItemCount
