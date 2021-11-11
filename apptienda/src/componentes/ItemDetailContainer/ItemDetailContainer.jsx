import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../UI/Spinner/Spinner'
import {getFirestore} from '../../services/getFirebase'


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const {id}= useParams()
    console.log(id) 
    const [item, setItem] = useState(null)
 
    let detalleAuto ={ id: 0, nombre: "Ford Focus", modelo: "Modelo 2020", detalle: "Aire Ac, Direccion, Centralizado, 35.000KM", stock: 2, img: "https://automotiva.com.ar/wp-content/uploads/2019/02/Ford-Focus_ST-2020-1280-0d-1.jpg" }
   


    // const getItem = () => {
    //     // setLoading(true)
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(detalleAuto)
    //         }, 2000);
    //     }).then((res) => {
    //         setLoading(false)
    //         setItem(res)
    //     })
    // }

    useEffect(() => {
        // getItem()
        const db = getFirestore ()
    db.collection('Autos').doc(id).get()//trae toda la coleccion
    .then(resp => setItem ({id: resp.id, ...resp.data()}))
    console.log(item)

    }, [])
    return (
        <div>
            {loading && <Spinner />}
            {item && <ItemDetail autos={item}/>}
        </div>
    )
}

export default ItemDetailContainer
