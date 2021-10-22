import React from 'react'
// import { Link } from 'react-router-dom'; 

const ItemDetail = ({ prod }) => {
    // console.log(autos)
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    {/* <img src={prod.img} className="col-sm-8" alt="...imagen de producto" /> */}
                    {/* <h2 className="card-title">{prod.nombre}</h2> */}
                    {/* <h2 className="card-title">{prod.detalle}</h2> */}
                    <h3 className="card-subtitle mb-2 text-muted">Oportunidad!!!</h3>
                    <p className="card-text">Todos los modelos cuentan con amplia financiacion.</p>

                </div>
            </div>


        </div>
    )
}

export default ItemDetail
