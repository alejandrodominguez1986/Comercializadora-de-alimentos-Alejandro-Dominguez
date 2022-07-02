import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div >
        <h1 className='h1. Bootstrap heading fw-bold fst-italic text-decoration-underline text-uppercase bg-secondary text-dark bg-gradient'>
        {greeting}
        </h1>
    </div>
  )
}

export default ItemListContainer