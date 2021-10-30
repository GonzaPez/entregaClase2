import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext';
const ItemCount = ({ stock, producto }) => {
    const { addToCart } = useContext(CartContext)


    let [product, setProduct] = useState({
        ...producto,
        cantidad: 1,
        precio: producto.precio,
      });
    
      const { cantidad, precio } = product;
    
      function agregar() {
        if (cantidad < stock) {
          setProduct({
            ...product,
            cantidad: cantidad + 1,
            precio: precio + producto.precio,
          });
        }
      }
    
      function remover() {
        if (cantidad > 1) {
          setProduct({
            ...product,
            cantidad: cantidad - 1,
            precio: precio - producto.precio,
          });
        }
      }
    
      return (
        <div>
          <div>
            <button className="btn btn-primary" onClick={agregar}>
              Sumar
            </button>
            <button className="btn btn-secondary" onClick={remover}>
              Quitar
            </button>
            <div>
              <text> Quiero comprar: {product.cantidad}</text>
            </div>
            <div>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-success my-2"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default ItemCount;