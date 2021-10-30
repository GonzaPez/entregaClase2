import React, { useContext } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../Context/CartContext'


const Icono = () => {
    const {cart} = useContext (CartContext) 
    return (
        <div className="Icono" style={{fontSize: "2em"}}>

            <FontAwesomeIcon icon={faCartPlus}/>
            <span>{cart.length}</span>
                       
        </div>
    )
}

export default Icono
