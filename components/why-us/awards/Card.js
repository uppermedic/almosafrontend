import React from 'react';
import { i18n, withTranslation } from 'root/i18n';

const Card = ({ t, item }) => {
  const { language } = i18n;
  return (
    <div className="card-item">
      <div>
        <h4 style={{ backgroundColor: item?.color }}>
          {language ? item[language]?.title : ''}
        </h4>
      </div>
      <div className="px-3">
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: language ? item[language]?.content : ''
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

export default withTranslation('common')(Card);
