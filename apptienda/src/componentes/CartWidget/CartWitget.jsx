import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import Item from '../Item/Item'
import CartElementItem from '../CartElementItem/CartElementItem'

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
            <button className="btn btn-secondary"disabled={cart.length<1} onClick={resetCart} >Limpiar Carrito</button>
        </div>
    )
}

export default CartWitget
