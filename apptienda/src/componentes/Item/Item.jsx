import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


const Item = ({ prod }) => {
console.log(JSON.parse(prod.img))

    return (
        <div className="">

            <div className="card text-center col-sm-24">
                <div className="card-header">
                    
                </div>
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">{prod.modelo}</p>
                    <p className="card-text">Unidades disponibles {prod.stock}</p>
                    <img src={JSON.parse(prod.img)} className="col-sm-8" alt="...imagen de producto" />
                    <ItemCount stock={prod.stock} producto={prod}/>
                    <div>
                        <div> 
                            <Link to={`/ItemDetail/${prod.id}`} className="btn btn-primary"> Detalle Del Modelo </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Item
