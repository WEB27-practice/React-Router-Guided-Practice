import React from "react";
import items from "../data";
import { Link } from "react-router-dom";

function ItemsList() {
  return (
    <div className="items-list-wrapper">
      {items.map(item => (
        <Link to={`/item-list/${item.id}`}>
          <div className="item-card" key={item.id}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ItemsList;

// This component will be what we use in our Route to display our Shop page with various items. We will loop through out data and put out a  card for each item in our data.js file
