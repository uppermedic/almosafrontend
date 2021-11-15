import React, { useState, useEffect } from 'react';
import { Link, i18n, withTranslation } from 'root/i18n';
import { strippedContent, truncate } from 'src/utils/helpers';

function PatientFeatures({ t, item }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="card-item">
      <Link href={`/${locale}/${item.path}` || '#'}>
        <a>
          <h3>{language && truncate(item[language]?.title, 20, '...')}</h3>
        </a>
      </Link>
      <p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              (language &&
                truncate(
                  strippedContent(item[language]?.excerpt || ''),
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

PatientFeatures.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(PatientFeatures);
