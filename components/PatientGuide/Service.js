import React from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
export default function Service({ item, t }) {
  return (
    <div className="guide-card" style={{ backgroundImage: `url(${item.bg})` }}>
      <Link href={item.url}>
        <a>
          <div className={`text-center ribbon ${item.ribbon_class}`}>
            <div className="the-pattrn">
              <img src="/images/pattern.svg" alt="pattern" />
            </div>
            <h3>{t(`menu:${String(item.title).toLowerCase()}`)}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
}
