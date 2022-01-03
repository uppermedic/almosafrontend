import React, { useEffect, useState } from 'react';
import { i18n, Link } from 'root/i18n';
import { removeSpChar } from 'src/utils/helpers';

export default function MedicalCenter({ item }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <Link
      href={`/${locale}/services/medical-centers/${
        language &&
        removeSpChar(String(item[language].title)).split(' ').join('-')
      }/?id=${item.id}`}
    >
      <a>
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
      </a>
    </Link>
  );
}
