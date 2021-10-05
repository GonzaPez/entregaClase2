import React from 'react'
import CartWitget from '../CartWidget/CartWitget'
import Icono from '../Icono/Icono'

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ofertas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categorias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Envios</a>
              </li>
            </ul>
          </div>
        </div>
        <Icono />
        <CartWitget stock={10}/>

      </nav>
    </div>
  )
}

export default navbar
