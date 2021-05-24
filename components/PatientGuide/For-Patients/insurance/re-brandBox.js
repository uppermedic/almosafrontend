import React from 'react';
import { Link } from 'i18n';
const BrandBox = ({ name, image, link }) => {
  return (
    <div className="brand-box">
      <div className="brand-name">{name && name}</div>
      <div className="brand-logo">
        <img src={image && image} alt="logo" />
      </div>
      <div className="button-link">
        <a href={link && link} target="_blank">
          Visit website
        </a>
      </div>
    </div>
  );
};

export default BrandBox;
