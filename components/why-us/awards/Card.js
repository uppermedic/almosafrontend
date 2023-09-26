import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Card = ({ item }) => {
const { t } = useTranslation('common');

  const router = useRouter();
  const { locale } = router;

  return (
    <div className="card-item">
      <div>
        <h4 style={{ backgroundColor: item?.color }}>
          {locale ? item[locale]?.title : ''}
        </h4>
      </div>
      <div className="px-3">
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: locale ? item[locale]?.content : ''
            }}
          />
        </p>

        {item?.url && (
          <div className="mt-3">
            <a href={item?.url} target="_blank">
              <strong>{t('read_more')}</strong>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
