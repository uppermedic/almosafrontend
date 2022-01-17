import React from 'react';
const CardItem = ({ name, title, image, link }) => {
  return (
    <div className="card-box">
      {name && (
        <div className="card-name">
          {name}
          {title && <strong className="card-title">{title}</strong>}
        </div>
      )}

      {image && (
        <div className="card-logo">
          <img src={image} alt="logo" />
        </div>
      )}
      {link && (
        <div className="button-link">
          <a href={link} target="_blank" rel="noopener noreferrer nofollow">
            Visit Link
          </a>
        </div>
      )}
    </div>
  );
};

export default CardItem;
