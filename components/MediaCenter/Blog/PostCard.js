import React from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent, truncate } from 'src/utils/helpers';

import { Row, Col } from 'reactstrap';
function Post({ article, t }) {
  const { id, image } = article;
  const { title, slug, content } = i18n.language ? article[i18n.language] : {};
  // const { title, slug, content } = { title: '', slug: '', content: '' };
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
            href={`/media-center/blog/post/${String(title)
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
