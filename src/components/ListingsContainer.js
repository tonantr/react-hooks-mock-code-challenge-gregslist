import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setItems(data))
  })

  function handleDeleteItem(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
      const updatedItem = items.filter((item) => (item.id !== id))
      setItems(updatedItem)
    })
  }

  const listingCard = items.map((item) => (
    <ListingCard
      key={item.id}
      item={item}
      onDeleteItem={handleDeleteItem}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {listingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
