import React, { useState, useEffect } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { truncate, strippedContent, removeSpChar } from 'src/utils/helpers.js';

function NewsItem({ news, t }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="item caro-card">
      <Link
        href={`/${locale}/media-center/news/post/${
          language &&
          removeSpChar(String(news[language].title)).split(' ').join('-')
        }/?id=${news.id}`}
      >
        <a>
          <img src={news.thumbnail} alt="news" />
          <div className="content">
            <h5>
              {truncate(
                strippedContent(
                  (language && news[language]?.title) || 'No Data'
                ),
                20,
                '......'
              )}
            </h5>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: truncate(
                    strippedContent(
                      (language && news[language].content) || 'No Data'
                    ),
                    60,
                    '......'
                  )
                }}
              />
            </p>
            <Link
              href={
                language &&
                `/${locale}/media-center/news/post/${
                  language &&
                  removeSpChar(String(news[language].title))
                    .split(' ')
                    .join('-')
                }/?id=${news.id}`
              }
            >
              <a className="details_link">{t('read_more')}</a>
            </Link>
          </div>
        </a>
      </Link>
    </div>
  );
}
NewsItem.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(NewsItem);
