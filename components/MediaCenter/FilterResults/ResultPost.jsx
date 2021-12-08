import React, { useState, useEffect } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { Row, Col } from 'reactstrap';
import { strippedContent, truncate } from 'src/utils/helpers';

function Post({ article, t }) {
  const { id, image, created_at, type } = article;
  const { language } = i18n;
  const { title, slug, content } = language ? article[language] : {};

  const [locale, setlocale] = useState('');
  const [articleType, setarticleType] = useState('news');

  useEffect(() => {
    setlocale(language);
  }, [language]);

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
          <img src={image} alt="search result" />
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
              href={`/${locale}/media-center/${articleType}/post/${String(title)
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

Post.getInitialProps = async context => ({
  namespacesRequired: ['common']
});
export default withTranslation('common')(Post);
