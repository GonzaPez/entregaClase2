import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../UI/Spinner/Spinner'


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const {id}= useParams()
    console.log(id) 
    const [item, setItem] = useState(null)

    let detalleAuto = [{ id: 0, nombre: "Ford Focus", modelo: "Modelo 2020", detalle: "Aire Ac, Direccion, Centralizado, 35.000KM", stock: 2, img: "https://automotiva.com.ar/wp-content/uploads/2019/02/Ford-Focus_ST-2020-1280-0d-1.jpg" },
    { id: 1, nombre: "Honda Civic", modelo:"Modelo 2021", detalle:"Aire Ac, Direccion, Centralizado, 25.000KM", stock: 5, img: "https://img.autocosmos.com/noticias/fotos/extralarge/NAZ_31c8cdd941084435919eb08a3784651b.jpg" },
    { id: 2, nombre: "Chevrolet Cruze", modelo:"Modelo 2020", detalle:"Aire Ac, Direccion, Centralizado, 43.000KM",stock: 6, img: "https://fotos.perfil.com/2019/12/17/trim/1280/720/chevrolet-actualizo-la-version-lt-del-cruze-824280.jpg" },
    { id: 3, nombre: "Jeep Renegade", modelo:"Modelo 2020", detalle:"Aire Ac, Direccion, Centralizado, 38.000KM",stock: 2, img: "https://soymotor.com/sites/default/files/styles/mega/public/imagenes/noticia/jeep_renegade_1.jpg?itok=F2kdj5G1" },
    { id: 4, nombre: "Jeep Compass", modelo:"Modelo 2019", detalle:"Aire Ac, Direccion, Centralizado, 65.000KM",stock: 1, img: "https://www.megautos.com/wp-content/uploads/2019/04/Jeep-Compass-2019-delantera-1.jpg" },
    { id: 5, nombre: "Peugeot 208", modelo:"Modelo 2018", detalle:"Aire Ac, Direccion, Centralizado, 68.000KM",stock: 2, img: "https://www.infoauto.com.ar/files/system/cms/files/files/53246/original/Peugeot_208_Argentina-portada.jpg" },
    { id: 6, nombre: "Volkswagen Golf", modelo:"Modelo 2020", detalle:"Aire Ac, Direccion, Centralizado, 15.000KM",stock: 3, img: "https://images1.autocasion.com/unsafe/1200x900/actualidad/wp-content/uploads/2020/03/VolkswagenGolfGTI13.jpg" },
]

    const getItem = () => {
        setLoading(true)
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(detalleAuto)
            }, 2000);
        }).then((res) => {
            setLoading(false)
            setItem(res)
        })
    }

    useEffect(() => {
        getItem()

    }, [])
    return (
        <div>
            {loading && <Spinner />}
            {item && <ItemDetail autos={item}/>}
        </div>
    )
}

export default ItemDetailContainer
