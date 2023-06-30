import React from "react";

function ListingCard({item, onDeleteItem}) {

  const { id, description, image, location } = item;

  function handleDeleteClick() {
    onDeleteItem(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$</span>
        <img src={image} alt={'description'} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
