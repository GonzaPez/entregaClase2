import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Spinner from '../UI/Spinner/Spinner'

const ItemListContainer = ({ addCarrito }) => {
//*sirve para ocultar o mostrar el spinner
const [loading, setLoading] = useState(false)
//*sirve para mapear los elementos que luego levanto en card
const [items, setItems] = useState(null)
//detalle de los elementos
  const data = [
    { id: 0, nombre: "Disco Bumper Competicion", stock: 20, img: "https://static-abcblogs.abc.es/wp-content/uploads/sites/254/2021/04/DiscosOlimpicos1.jpg" },
    { id: 1, nombre: "Disco Bumper Barato", stock: 25, img: "https://static-abcblogs.abc.es/wp-content/uploads/sites/254/2021/04/DiscosOlimpicos1.jpg" },
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
    
    <div className="container p-4">
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
