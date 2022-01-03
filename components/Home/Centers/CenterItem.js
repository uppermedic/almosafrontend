import React, { useEffect, useState } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { truncate, strippedContent, removeSpChar } from 'src/utils/helpers.js';
import Markdown from 'markdown-to-jsx';

function CenterItem({ t, center }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="item caro-card">
      <Link
        href={`/${locale}/services/medical-centers/${
          language &&
          removeSpChar(String(center[language]?.title)).split(' ').join('-')
        }/?id=${center?.id}`}
      >
        <a>
          <img src={center.ar.thumbnail} alt="center" />
          <div className="content">
            <h3>
              <Markdown>
                {truncate(
                  strippedContent((language && center[language]?.title) || ' '),
                  20,
                  '......'
                )}
              </Markdown>
            </h3>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    truncate(
                      strippedContent(language && center[language]?.excerpt),
                      70,
                      '......'
                    ) || ' '
                }}
              />
            </p>
            <Link
              href={`/${locale}/services/medical-centers/${
                language &&
                removeSpChar(String(center[language]?.title))
                  .split(' ')
                  .join('-')
              }/?id=${center?.id}`}
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
