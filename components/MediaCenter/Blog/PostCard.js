import React, { useEffect, useState } from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent, truncate } from 'src/utils/helpers';

import { Row, Col } from 'reactstrap';
function Post({ article, t }) {
  const { id, image } = article;
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
          <img src={image} alt="" srcSet="" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="title-wrapper">
          <h6 className="title">{title}</h6>
          <div>
            <span>July 20, 2020</span>
          </div>
        </Col>
        <Col xs={12} className="description">
          <Markdown>
            {content ? truncate(strippedContent(content), 200, '...') : ''}
          </Markdown>
          <Link
            href={`/${locale}/media-center/blog/post/${String(title)
              .split(' ')
              .join('-')}?id=${id}`}
          >
            <a className="d-block">{t('read_more')}</a>
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
