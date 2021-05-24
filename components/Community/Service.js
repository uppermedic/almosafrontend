import React from 'react';
import { i18n, Link } from 'root/i18n';

export default function Service({ item, index }) {
  const lang = i18n.language;
  return (
    <Link href={`/community/${item.en.slug}`}>
      <a>
        <div
          className="content-card"
          style={{ backgroundImage: `url(${item.thumbnail})` }} // will be handle according to the slug
        >
          <div
            className={`text-center ribbon ribbon-${index}`}
            // style={{ backgroundColor: item.color }}
          >
            <h4>{lang && item[lang].title}</h4>
          </div>
        </div>
      </a>
    </Link>
  );
}
