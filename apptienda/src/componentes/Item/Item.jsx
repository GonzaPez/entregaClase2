import React, {useState} from 'react'

const Item = () => {

    const [items, setAgregar]=useState(0);

   
  
    return (
        <div>
            
            <div class="card text-center col-sm-4">
                <div class="card-header">
                    Peso Libre
                </div>
                <div class="card-body">
                    <h5 class="card-title">Discos Olimpicos</h5>
                    <p class="card-text">Discos Bumper de Caucho, profesionales</p>
                    <img src="https://static-abcblogs.abc.es/wp-content/uploads/sites/254/2021/04/DiscosOlimpicos1.jpg" class="col-sm-4" alt="...imagen de producto"/>
                    <button  class="btn btn-primary" onClick = {()=>setAgregar(items+1)} >Agregar</button>
                    <button  class="btn btn-secondary" onClick = {()=>setAgregar(items-1)} >Quitar</button>
                    <text> Agregados al Carrito: {items}</text>
                    
                </div>

            </div>
            
       
        </div >
    )
}

export default Item
