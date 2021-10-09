import React from 'react'
import Item from '../Item/Item'



const ItemListContainer = ({ addCarrito }) => {


  const items = [
    { id: 0, nombre: "Disco Bumper Competicion", stock: 20, img: "https://static-abcblogs.abc.es/wp-content/uploads/sites/254/2021/04/DiscosOlimpicos1.jpg" },
    { id: 1, nombre: "Disco Bumper Barato", stock: 25, img: "https://static-abcblogs.abc.es/wp-content/uploads/sites/254/2021/04/DiscosOlimpicos1.jpg" },
  ]

  return (
    <div className="container p-4">

      {
        items.map((producto) => {
          return <Item prod={producto}
          addCarrito={addCarrito}/>
        }


        )
      }

    </div>
  )
}

export default ItemListContainer
