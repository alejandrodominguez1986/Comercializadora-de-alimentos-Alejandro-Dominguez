import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Productos from "../Productos.json";
const ItemListContainer = ({ greeting }) => {
    
    //console.log(Products);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(setLoading, 2000, false);
        console.log('useEffect');
    }, []);
    
  return (
    <div className="container-fluid ">
      <div className="h1. Bootstrap heading fw-bold fst-italic text-decoration-underline text-uppercase bg-secondary text-dark bg-gradient">
        {" "}
        {greeting}{" "}
      </div>{" "}
      <div className="row ">
        <ItemCount
          stock={5}
          initial={1}
          onAdd={(n) => alert(`agregados ${n} productos`)}
        />{" "}
     {loading ? (<h3>CARGANDO</h3>):(<ItemList items={Productos}/>)} 
      </div>
    </div>
  );
};

export default ItemListContainer;
