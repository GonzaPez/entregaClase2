import React from 'react'
import CartWitget from '../CartWidget/CartWitget'
import Icono from '../Icono/Icono'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to= "/">MarketCar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <a className="nav-link active" href="#">Ofertas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Categorias</a>
              </li>

            </ul>
          </div>
        </div>
        <Link to="/cart">
        <Icono />
        </Link >
        
      </nav>
    </div>
  )
}

export default navbar
