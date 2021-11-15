import React from 'react';
import { i18n, Link } from 'root/i18n';

export default function Service({ item }) {
  const lang = i18n.language;
  return (
    <a target="_blank" href={item.url}>
      <div className="card-item">
        <div className="overlay"></div>
        <div className={`text-center ribbon`}>
          <h3>{lang && item[lang].title}</h3>
        </div>
        <img src={item.image} alt="hakeem-magazine" />
      </div>
    </a>
  );
}
