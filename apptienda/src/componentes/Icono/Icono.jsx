import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

const Icono = () => {
    return (
        <div className="Icono" style={{fontSize: "2em"}}>
            <FontAwesomeIcon icon={faCartPlus}/>
            
        </div>
    )
}

export default Icono
