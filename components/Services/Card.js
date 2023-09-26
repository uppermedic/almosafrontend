import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { strippedContent, truncate } from 'src/utils/helpers';
import { useRouter } from 'next/router';

function PatientFeatures({ item }) {
const { t } = useTranslation('common');

  const router = useRouter();
  const { locale } = router;

  return (
    <div className="card-item">
      <Link href={`/${locale}/${item.path}` || '#'}>
        <a>
          <h3>{locale && truncate(item[locale]?.title, 20, '...')}</h3>
        </a>
      </Link>
      <p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              (locale &&
                truncate(
                  strippedContent(item[locale]?.excerpt || ''),
                  100,
                  '...'
                )) ||
              ''
          }}
        />
      </p>

      <Link href={`/${locale}/${item.path}` || '#'}>
        <a>
          <span className="read-more"> {t('read_more')} </span>
        </a>
      </Link>
    </div>
  );
}

export default PatientFeatures;
