import React from 'react';
import {  useTranslation } from 'next-i18next';
import { truncate, strippedContent, removeSpChar } from 'src/utils/helpers.js';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NewsItem({ news}) {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  return (
    <div className="item caro-card">
      <Link
        href={`/${locale}/media-center/news/post/${
          locale &&
          removeSpChar(String(news[locale].title)).split(' ').join('-')
        }/?id=${news.id}`}
      >
        <a>
          <img src={news.thumbnail} alt="news" />
          <div className="content">
            <h5>
              {truncate(
                strippedContent(
                  (locale && news[locale]?.title) || 'No Data'
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
                      (locale && news[locale].content) || 'No Data'
                    ),
                    60,
                    '......'
                  )
                }}
              />
            </p>
            <Link
              href={
                locale &&
                `/${locale}/media-center/news/post/${
                  locale &&
                  removeSpChar(String(news[locale].title))
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

export default NewsItem;
