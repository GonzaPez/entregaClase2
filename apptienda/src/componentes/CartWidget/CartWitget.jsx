import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import Item from '../Item/Item'
import CartElementItem from '../CartElementItem/CartElementItem'
import { Link } from 'react-router-dom'

const CartWitget = () => {

    const { cart, setCart, addToCart, resetCart } = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            
            {cart.length > 0 ? cart.map((elemento) => (<CartElementItem prod={elemento} />)) : (
                <div className="d-flex">
                    <h3 className="text">Esta Vacio el Carrito</h3>
                </div>
            )}
            {cart.length > 0 ? (<button className="btn btn-secondary" onClick={resetCart} >Limpiar Carrito</button>) : (<Link className="btn btn-primary" to="/">Volver a Comprar</Link>) } 
            
        </div>
    )
}

export default CartWitget
