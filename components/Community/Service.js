import React, { useState, useEffect } from 'react';
import { i18n, Link } from 'root/i18n';

export default function Service({ item, index }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <Link href={`/${locale}/community/${item.en.slug}`}>
      <a>
        <div
          className="content-card"
          style={{ backgroundImage: `url(${item.thumbnail})` }} // will be handle according to the slug
        >
          <div className={`text-center ribbon ribbon-${index}`}>
            <h4>{language && item[language].title}</h4>
          </div>
        </div>
      </a>
    </Link>
  );
}
