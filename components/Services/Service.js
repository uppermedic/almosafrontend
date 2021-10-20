import React, { useState, useEffect } from 'react';
import { i18n, Link } from 'root/i18n';

export default function Service({ item }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <Link href={`/${locale}/services/${item.en.slug}`}>
      <a>
        <div
          className="service-card"
          style={{
            backgroundImage: `url(${
              item.thumbnail ||
              'https://image.shutterstock.com/image-photo/colored-wooden-blocks-diagonally-aligned-600w-1027385548.jpg'
            })`
          }}
        >
          <div className={`text-center ribbon`}>
            <h3>{language ? item[language].title : 'Loading'}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
