import React from "react";

const Checkout = () => {
  return (
    <div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Nombre Completo
        </span>
        <input
          type="text"
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
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div className="input-group input-group-lg">
        <span class="input-group-text" id="inputGroupPrepend3">
          Email
        </span>
        <input
          type="text"
          class="form-control is-invalid"
          id="validationServerUsername"
          aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
          required
        />
        <div id="validationServerUsernameFeedback" class="invalid-feedback">
          Ingrese un Email Valido.
        </div>
      </div>
    </div>
  );
};

export default Checkout;
