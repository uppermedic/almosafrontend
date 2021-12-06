import React, { useEffect, useState } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { strippedContent, truncate } from 'src/utils/helpers';
import { Row, Col } from 'reactstrap';
function Post({ article, t }) {
  const { id, image, created_at } = article;
  const { language } = i18n;
  const { title, slug, content } = language ? article[language] : {};
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

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
          <div
            dangerouslySetInnerHTML={{
              __html: content
                ? truncate(strippedContent(content), 200, '...')
                : ''
            }}
          />
          <Link
            href={`/${locale}/media-center/news/post/${String(title)
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
Post.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(Post);