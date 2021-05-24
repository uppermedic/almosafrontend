import React from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';

export default function Service({ item }) {
  const { language } = i18n;
  return (
    <Link href={`/services/${item.en.slug}`}>
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
          <div
            className={`text-center ribbon`}
            // style={{ backgroundColor: item.color }}
          >
            <h3>{language ? item[language].title : 'Loading'}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
