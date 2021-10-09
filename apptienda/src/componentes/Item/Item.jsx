import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';



const Item = ({prod}) => {

    


    return (
        <div>

            <div class="card text-center col-sm-4">
                <div class="card-header">
                    Peso Libre
                </div>
                <div class="card-body">
                    <h5 class="card-title">{prod.nombre}</h5>
                    <p class="card-text">Discos Bumper de Caucho, profesionales</p>
                    <img src="https://static-abcblogs.abc.es/wp-content/uploads/sites/254/2021/04/DiscosOlimpicos1.jpg" class="col-sm-4" alt="...imagen de producto" />
                    <ItemCount stock ={prod.stock}/>
                    <div>
                    
                    </div>

                </div>

            </div>


        </div >
    )
}

export default Item
