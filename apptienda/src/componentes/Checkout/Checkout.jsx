import React,  {useState} from "react";
import Swal from "sweetalert2";
import { chequearSiEstaVacio } from "../../Helpers";
import { getFirestore } from "../../services/getFirebase";

const Checkout = ({carrito, total, resetCart}) => {
  const [datos, setDatos] = useState({
    nombre: '',
    mail: '',
    telefono:'', 
    compras: carrito,
    total: total,
  })
const {nombre, mail, telefono} = datos
const handleChange = (e) =>{
const {name, value} = e.target 
setDatos({...datos, [name]:value})
}

const generarTicket = async () =>{
  if (chequearSiEstaVacio([nombre, mail, telefono])){
    alert("Hay campos vacios!")
    return
  }
  try {
    const db = getFirestore();
  const collection = db.collection("Ordenes");
  const doc = await collection.add(datos);
  console.log(datos)
  resetCart()
  Swal.fire("Su orden Num... ha sido creada", "Genial!!, Muchas Gracias Por la Compra!");
  } catch (error) {
    console.log(error)
    
  }
 }

  return (
    <div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Nombre Completo
        </span>
        <input
          type="text"
          name="nombre" 
          value={nombre}
          onChange={handleChange}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Telefono
        </span>
        <input
          type="text"
          name="telefono" 
          value={telefono}
          onChange={handleChange}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroupPrepend3">
          Email
        </span>
        <input
          type="text"
          name="mail" 
          value={mail}
          onChange={handleChange}
          class="form-control is-invalid"
          id="validationServerUsername"
          aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
          required
        />
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          Ingrese un Email Valido.
        </div>
        <button
                onClick={generarTicket}
                className="btn btn-primary w-100 my-4"
              >
                {" "}
                Terminar Con La Compra{" "}
              </button>
      </div>
    </div>
  );
};

export default Checkout;
