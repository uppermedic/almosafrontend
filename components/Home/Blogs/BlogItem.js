import React, { useState, useEffect } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';

function BlogItem({ blog, t }) {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="item caro-card">
      <Link
        href={`/${locale}/media-center/blog/post/${
          language && String(blog[language].title).split(' ').join('-')
        }?id=${blog.id}`}
      >
        <a>
          <img src={blog.thumbnail} alt="" srcSet="" />
          <div className="content">
            <h5>
              {truncate(
                strippedContent(
                  (language && blog[language].title) || 'No Data'
                ),
                20,
                '......'
              )}
            </h5>
            <p>
              <Markdown>
                {truncate(
                  strippedContent(
                    (language && blog[language].content) || 'No Data'
                  ),
                  60,
                  '......'
                )}
              </Markdown>
            </p>
            <Link
              href={
                language &&
                `/${locale}/media-center/blog/post/${
                  language && String(blog[language].title).split(' ').join('-')
                }?id=${blog.id}`
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
BlogItem.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(BlogItem);
