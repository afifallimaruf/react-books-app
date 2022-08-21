import React from "react";
import Button from "../../../Button";
import "./Card.css";

const Card = (props) => {
  const { book, onAdd, text} = props;
  return (
    <div className="card">
      <div className="card-body">
        <img src={book.image} alt="books" className="card-image" />
        <h1 className="card-title">{book.name}</h1>
      </div>
      <Button onAdd={onAdd} book={book} text={text} />
    </div>
  );
}

export default Card;
