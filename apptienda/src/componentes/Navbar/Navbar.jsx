import React from "react";
import Icono from "../Icono/Icono";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MarketCar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink active to='/categoria/auto' className="nav-link" >
                  Autos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink active to='/categoria/camioneta' className="nav-link" >
                  Camionetas
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/cart">
          <Icono />
        </Link>
      </nav>
    </div>
  );
};

export default navbar;
