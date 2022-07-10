import React from "react";

function Item({ id, title, description, price, pictureUrl }) {
  return (
    <div classNameName="divProducto ">
      <div class="card border border-dark border-5 rounded">
        <img
          src={pictureUrl}
          alt={title}
          className="card-img-top rounded mx-auto d-block imgProducto"
        />
        <div class="card-body ">
          <h5 class="card-title">{title}</h5>
          <p classNameName="card-text">{description}</p>
          <p classNameName="card-text ">$ {price}</p>
          <p className="card-text">Id:{id}</p>
          <button classNameName="btn btn-primary">Detalle</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
