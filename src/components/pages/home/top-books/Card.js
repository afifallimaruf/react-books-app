import React from "react";
import "./Card.css";

const Card = (props) => {

  const handleAddFavorites=()=>{
    console.log('diklik');
  }
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.book.image} alt="books" className="card-image" />
        <h1 className="card-title">{props.book.name}</h1>
      </div>
      <button className="card-button" onClick={handleAddFavorites}>Add to Favorites</button>
    </div>
  );
};

export default Card;
