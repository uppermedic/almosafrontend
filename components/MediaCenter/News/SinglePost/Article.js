import React from 'react';
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { removeSpChar } from 'src/utils/helpers';
import { useRouter } from 'next/router';

function Article({ article, originalArticle, related }) {
  const { t } = useTranslation('common');

  const router = useRouter();
  const { locale } = router;

  return (
    <Row>
      <Col xs={12} className="mt-2 mb-5">
        <img
          className="thumbnail shadow-lg rounded"
          src={originalArticle?.image}
          alt="single new"
        />
      </Col>
      <Col xs={12} className="post-content">
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: article?.content
            }}
          />
        </p>
      </Col>
      {related?.length > 0 && (
        <Col xs={12}>
          <div className="related-links my-5">
            <h5>
              <strong>{t('read_more')} : -</strong>
            </h5>
            <ul>
              {related.map((relLink, idx) => (
                <li className="py-2" key={idx}>
                  {locale === 'en' ? (
                    <IoIosArrowForward />
                  ) : (
                    <IoIosArrowBack />
                  )}
                  <Link
                    href={`/${locale}/media-center/news/post/${removeSpChar(
                      String(relLink[locale]?.title)
                    )
                      .split(' ')
                      .join('-')}/?id=${relLink?.id}`}
                  >
                    <a>{relLink[locale]?.title + ' . '}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      )}
    </Row>
  );
}

export default Article;
