import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext';
const ItemCount = ({ stock, producto }) => {
    const { addToCart } = useContext(CartContext)


    const [items, setItems] = useState(1);
    const [costo, setCosto] = useState(producto.precio)
    const [product, setProduct] = useState({
        ...producto,
        cantidad: items,
        precio: costo

    })
    

    function agregar() {

        if (items < stock) {
            setItems(items + 1)
            setCosto((items+1)*costo)
            setProduct({ ...product, cantidad: items + 1, precio: costo })

        }
    }

    function remover() {
        if (items > 1) {
            setItems(items - 1)

            setProduct({ ...product, cantidad: items, precio: product.precio * items })
        }
    }

    return (
        <div>

            <div>
                <button className="btn btn-primary" onClick={agregar} >Sumar</button>
                <button className="btn btn-secondary" onClick={remover} >Quitar</button>
                <div>
                    <text> Quiero comprar: {items}</text>
                </div>
                <div>
                    <button onClick={() => addToCart(product)} className="btn btn-success my-2">Agregar al Carrito</button>
                </div>

            </div>




        </div >
    )
}

export default ItemCount
