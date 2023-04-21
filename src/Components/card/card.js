import React from 'react';
import './card.css'
const Card = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="house_image" height="200px" width="200px"/>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;