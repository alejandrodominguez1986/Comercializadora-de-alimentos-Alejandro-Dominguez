import React from 'react';
import ItemCount from './ItemCount';
const ItemListContainer = ({greeting}) => {
  return (
    <div >
        <div className='h1. Bootstrap heading fw-bold fst-italic text-decoration-underline text-uppercase bg-secondary text-dark bg-gradient'>
        {greeting}        
        </div>  
        <div>
        <ItemCount 
        stock ={5} 
        initial ={1} 
        onAdd ={(n) => alert (`agregados ${n} productos`)}/>
          </div>     
    </div>
  );
};

export default ItemListContainer;