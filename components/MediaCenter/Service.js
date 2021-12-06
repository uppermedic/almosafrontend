import React, { useEffect, useState } from 'react';
import { Link, i18n } from 'root/i18n';
export default function Service({ item, t }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <>
      <Link href={`/${locale}/${item.url}`}>
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
    </>
  );
}
