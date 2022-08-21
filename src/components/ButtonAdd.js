import React from 'react';
import './Button.css';


const ButtonAdd = (props) => {
  const { onAdd, book } = props;
  return (
    <button className='button-add' onClick={()=> onAdd(book)}>Add to Favorites</button>
  )
}

export default ButtonAdd;