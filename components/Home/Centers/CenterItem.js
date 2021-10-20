import React, { useEffect, useState } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';

function CenterItem({ t, center }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="item caro-card">
      <Link href={`/${locale}/services/medical-centers/${center.id}`}>
        <a>
          <img src={center.ar.thumbnail} alt="" srcSet="" />
          <div className="content">
            <h3>
              {truncate(
                strippedContent(
                  (language && center[language].title) || 'No Data'
                ),
                20,
                '......'
              )}
            </h3>
            <p>
              <Markdown>
                {truncate(
                  strippedContent(
                    (language && center[language].excerpt) || 'No Data'
                  ),
                  70,
                  '......'
                )}
              </Markdown>
            </p>
            <Link
              href={`/${locale}/services/medical-centers/${
                language && String(center[language].title).split(' ').join('-')
              }?id=${center.id}`}
            >
              <a className="details_link">{t('read_more')}</a>
            </Link>
          </div>
        </a>
      </Link>
    </div>
  );
}
CenterItem.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(CenterItem);
