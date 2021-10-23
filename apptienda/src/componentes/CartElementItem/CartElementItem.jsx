import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContext'

const CartElementItem = ({prod}) => {
    const {deleteItem} = useContext(CartContext)
    return (
        <div className="">

            <div className="card text-center col-sm-24">
                <div className="card-header">

                </div>
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">{prod.modelo}</p>
                    <p className="card-text">Unidades disponibles {prod.stock}</p>
                    <img src={prod.img} className="col-sm-8" alt="...imagen de producto" />
                   
                    <div>
                        <div>
                            <button onClick={()=>deleteItem(prod)} className="btn btn-primary"> Borrar del Carrito </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CartElementItem
