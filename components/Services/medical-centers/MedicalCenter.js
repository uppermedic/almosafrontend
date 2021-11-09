import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { i18n } from 'root/i18n';

export default function MedicalCenter({ item }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <Link
      href={`/${locale}/services/medical-centers/${
        language && String(item[language].title).split(' ').join('-')
      }?id=${item.id}`}
    >
      <div
        className="center-card"
        style={{ backgroundImage: `url(${item.thumbnail})` }}
      >
        <div className={`text-center overlay`}>
          <div className="ribbon">
            <h3>{(language && item[language].title) || 'No Title Here'}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
