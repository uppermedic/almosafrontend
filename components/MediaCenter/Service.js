import React from 'react';
import { Link } from 'root/i18n';
export default function Service({ item, t }) {
  return (
    <Link href={item.url}>
      <a>
        <div
          className="center-card"
          style={{ backgroundImage: `url(${item.bg})` }}
        >
          <div className={`text-center ribbon ${item.ribbon_class}`}>
            <h3>{t(String('menu:' + item.title).toLowerCase())}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
