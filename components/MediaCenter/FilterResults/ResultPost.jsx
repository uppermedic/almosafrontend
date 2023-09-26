import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';
import { strippedContent, truncate, removeSpChar } from 'src/utils/helpers';
import { useRouter } from 'next/router';

function Post({ article}) {
  const { t } = useTranslation('common');

  const { id, image, created_at, type } = article;
  const router = useRouter();
  const { locale } = router;

  const { title, content } = locale ? article[locale] : {};

  const [articleType, setarticleType] = useState('news');

  useEffect(() => {
    if (type === 'blog') {
      setarticleType('news');
    } else if (type === 'medical-article') {
      setarticleType('medical-articles');
    }
  }, [article]);

  return (
    <div className="post-card my-4 border-bottom pb-4">
      <Row className="">
        <Col lg={3}>
          <img src={image} alt="search_result" />
        </Col>
        <Col lg={6} className="mt-4 mt-lg-0 offset-lg-1">
          <div className="title-wrapper">
            <h6 className="title">{title}</h6>
            <div>
              <span>{created_at}</span>
            </div>
          </div>

          <div className="description">
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
              href={`/${locale}/media-center/${articleType}/post/${removeSpChar(
                String(title)
              )
                .split(' ')
                .join('-')}/?id=${id}`}
            >
              <a>{t('read_more')}</a>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Post;
