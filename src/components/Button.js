import React from 'react'
import ButtonAdd from './ButtonAdd';
import ButtonRemove from './ButtonRemove';

const Button = (props) => {
    const { onAdd, book, text,  onRemove } = props;
  
    if(text === 'add'){
      return <ButtonAdd onAdd={onAdd} book={book} />
    } else {
      return <ButtonRemove onRemove={onRemove} book={book} />
    }
}

export default Button;