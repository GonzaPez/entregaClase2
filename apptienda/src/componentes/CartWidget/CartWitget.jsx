import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import Item from '../Item/Item'
import CartElementItem from '../CartElementItem/CartElementItem'
import { Link } from 'react-router-dom'
import { sumarTotal } from '../../Helpers'

const CartWitget = () => {

    const { cart, setCart, addToCart, resetCart } = useContext(CartContext)
    let suma = sumarTotal(cart)
    console.log(cart)
    return (
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-6">
                    {cart.length > 0 ? cart.map((elemento) => (<CartElementItem prod={elemento} />)) : (
                        <div className="d-flex">
                            <h3 className="text">Esta Vacio el Carrito</h3>
                        </div>
                    )}
                    

                </div>
                <div className="col col-sm-12 col-md-6">
                    <h2>Su total a pagar es : ${suma}</h2>
                <Link to='/Checkout' className="btn btn-primary w-100 my-4"> Terminar Con La Compra </Link>
                {cart.length > 0 ? (<button className="btn btn-secondary w-100" onClick={resetCart} >Limpiar Carrito</button>) : (<Link className="btn btn-primary" to="/">Volver a Comprar</Link>)}
                </div>

            </div>


            
        </div>
    )
}

export default CartWitget
