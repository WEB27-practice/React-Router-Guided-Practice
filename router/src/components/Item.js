import React from "react";
import items from "../data";

function Item(props) {
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
        </div>
      </div>
      <div>
        <p className="item-description">{shopItem.description}</p>
      </div>
    </div>
  );
}

export default Item;

// In this component will create a separate item view that will display once we set up Dynamic Routes.
