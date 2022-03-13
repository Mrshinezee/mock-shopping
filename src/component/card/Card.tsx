import React, {useState, useEffect, useRef} from 'react';
import { FaRegHeart } from 'react-icons/fa';

import './Card.scss';

export type CardType = {
  // "id": number,
  "title": string,
  "price": number,
  // "description": string,
  // "category": string,
  "image": string,
  // "amount": number,
}

const Card = (props: CardType) => {
  const likeStyle = { color: "blue", fontSize: "1em" }

  const { title, price, image } = props;
  return (
    <div className="card">
      <div className="visual-image">
        <img src={image}  alt='item-displayed'/>
      </div>
      <div className="product_info">
        <div className="product_info_productPrice">{`$${price}`}</div>
        <p className="product_info_productName">{title}</p>
        <div className="product_info_productAction">
          <button className="add-btn">Add in cart</button>
          <button className="like-btn"><FaRegHeart style={likeStyle}/></button>
        </div>
      </div>
    </div>
  );
  
}

export default Card;
