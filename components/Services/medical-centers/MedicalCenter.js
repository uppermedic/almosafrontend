import React from 'react';
import Link from 'next/link';
import { removeSpChar } from 'src/utils/helpers';
import { useRouter } from 'next/router';

export default function MedicalCenter({ item }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <Link
      href={`/${locale}/services/medical-centers/${
        locale &&
        removeSpChar(String(item[locale].title)).split(' ').join('-')
      }/?id=${item.id}`}
    >
      <a>
        <div
          className="center-card"
          style={{ backgroundImage: `url(${item.thumbnail})` }}
        >
          <div className={`text-center overlay`}>
            <div className="ribbon">
              <h3>{(locale && item[locale].title) || 'No Title Here'}</h3>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
