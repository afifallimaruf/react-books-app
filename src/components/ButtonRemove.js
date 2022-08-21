import React from "react";

const ButtonRemove = (props) => {
  const { onRemove, book } = props;
  return <button className="button-remove" onClick={() => onRemove(book)}>Remove from Favorites</button>;
};

export default ButtonRemove;
