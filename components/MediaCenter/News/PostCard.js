import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { strippedContent, truncate, removeSpChar } from 'src/utils/helpers';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
function Post({ article }) {
  const { t } = useTranslation('common');

  const { id, image, created_at } = article;
  const router = useRouter();
  const { locale } = router;

  const { title, slug, content } = locale ? article[locale] : {};

  return (
    <div className="post-card mb-4">
      <Row>
        <Col xs={12}>
          <img src={image} alt="post-news" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="title-wrapper">
          <h6 className="title">{title}</h6>
          <div>
            <span>{created_at}</span>
          </div>
        </Col>
        <Col xs={12} className="description">
          <p>
            <div
              dangerouslySetInnerHTML={{
                __html: content
                  ? truncate(strippedContent(content), 200, '...')
                  : ''
              }}
            />
          </p>
          <Link
            href={`/${locale}/media-center/news/post/${removeSpChar(
              String(title)
            )
              .split(' ')
              .join('-')}/?id=${id}`}
          >
            <a className="d-block py-3">
              <strong>{t('read_more')}</strong>
            </a>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Post;
