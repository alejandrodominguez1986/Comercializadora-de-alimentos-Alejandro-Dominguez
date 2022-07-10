import React from 'react';
import Item from './Item';

function itemList({ items}) {
  return (
    <div className='container-fluid divItemList  '>
      {items.map(({id, title, description, price, pictureUrl}) => (
      <Item {...{id, title, description, price, pictureUrl}}/>
      ))}
      </div>
  );
};

export default itemList