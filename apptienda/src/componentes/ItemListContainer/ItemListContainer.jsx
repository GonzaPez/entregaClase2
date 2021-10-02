import React from 'react'

const ItemListContainer = ({children}) => {
    return (
        <div>
            <h2> Aca va a estar el catálogo</h2>
            <div ClassName="modal" tabindex="-1">
  <div ClassName="modal-dialog">
    <div ClassName="modal-content">
      <div ClassName="modal-header">
        <h5 ClassName="modal-title">Nombre Producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div ClassName="modal-body">
        <p>Descripción del Producto</p>
      </div>
      <div ClassName="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>


            {children}

        </div>
    )
}

export default ItemListContainer
