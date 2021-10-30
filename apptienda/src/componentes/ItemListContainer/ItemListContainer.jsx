import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Spinner from '../UI/Spinner/Spinner'
// import {getFirestore} from '../services/getFirebase'


const ItemListContainer = ({ addCarrito }) => {
//*sirve para ocultar o mostrar el spinner
const [loading, setLoading] = useState(false)
//*sirve para mapear los elementos que luego levanto en card
const [items, setItems] = useState(null)
//detalle de los elementos
// const db = getFirestore ()
  const data = [
    { id: 0, nombre: "Ford Focus", modelo:"Modelo 2020", detalle:"", precio : 2000000, stock: 2,  img: "https://automotiva.com.ar/wp-content/uploads/2019/02/Ford-Focus_ST-2020-1280-0d-1.jpg" },
    { id: 1, nombre: "Honda Civic", modelo:"Modelo 2021", detalle:"", precio : 4000000, stock: 5, img: "https://img.autocosmos.com/noticias/fotos/extralarge/NAZ_31c8cdd941084435919eb08a3784651b.jpg" },
    { id: 2, nombre: "Chevrolet Cruze", modelo:"Modelo 2020", detalle:"",precio : 2000000,stock: 6, img: "https://fotos.perfil.com/2019/12/17/trim/1280/720/chevrolet-actualizo-la-version-lt-del-cruze-824280.jpg" },
    { id: 3, nombre: "Jeep Renegade", modelo:"Modelo 2020", detalle:"",precio : 2000000,stock: 2, img: "https://soymotor.com/sites/default/files/styles/mega/public/imagenes/noticia/jeep_renegade_1.jpg?itok=F2kdj5G1" },
    { id: 4, nombre: "Jeep Compass", modelo:"Modelo 2019", detalle:"",precio : 2000000,stock: 1, img: "https://www.megautos.com/wp-content/uploads/2019/04/Jeep-Compass-2019-delantera-1.jpg" },
    { id: 5, nombre: "Peugeot 208", modelo:"Modelo 2018", detalle:"",precio : 2000000,stock: 2, img: "https://www.infoauto.com.ar/files/system/cms/files/files/53246/original/Peugeot_208_Argentina-portada.jpg" },
    { id: 6, nombre: "Volkswagen Golf", modelo:"Modelo 2020", detalle:"",precio : 2000000,stock: 3, img: "https://images1.autocasion.com/unsafe/1200x900/actualidad/wp-content/uploads/2020/03/VolkswagenGolfGTI13.jpg" },

  ]



  useEffect(() => {  
    
    //declaro que mientras espera de 3 segundos, no resuelve el data, y despues devuelve el result
  const promise = new Promise ((resolve, reject) => {
    //el State cambia para que cambie el estado de la carga y muestra el componente spinner
    setLoading(true) 
    //define el tiempo el tiempo de ejecucion
    setTimeout(() => {
    //despues de 3 segundos, me devuelve el array de data
      resolve(data)
    //cambia y no muestra mas el spinner
    setLoading(false)
    },2000);
  })
  //una vez que tengo el resultado, asigno al state items
  promise.then(result=>(setItems(result)))
   
  }, [])
  
  return (
    
    <div className="container d-fluid-center col-12">
      {loading && <Spinner/>}
      {items && items.map((producto) => {
          return <Item prod={producto}
            addCarrito={addCarrito}/>
        })
      }
    </div>
  )
}

export default ItemListContainer
