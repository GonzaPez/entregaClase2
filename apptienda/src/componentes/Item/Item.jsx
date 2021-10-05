import React, {useState} from 'react'

const Item = ({stock}) => {

    const [clicks, setClicks] = useState(0);

    const addClick =()=>{
      setClicks(clicks+1)
    }
  
  
    const removeClick =()=>{
      setClicks(clicks-1)
    }
  
    return (
        <div>
            <h2>{stock}</h2>
            <div class="card text-center col-sm-4">
                <div class="card-header">
                    Peso Libre
                </div>
                <div class="card-body">
                    <h5 class="card-title">Discos Olimpicos</h5>
                    <p class="card-text">Discos Bumper de Caucho, profesionales</p>
                    <img src="https://static-abcblogs.abc.es/wp-content/uploads/sites/254/2021/04/DiscosOlimpicos1.jpg" class="col-sm-4" alt="...imagen de producto"/>
                    <button  class="btn btn-primary" onClick={()=>addClick}>Agregar</button>
                    <button  class="btn btn-secondary" onClick={()=>removeClick}>Quitar</button>
                    
                </div>

            </div>
            
       
        </div >
    )
}

export default Item
