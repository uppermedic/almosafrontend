import React from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { Row, Col } from 'reactstrap';
import Markdown from 'markdown-to-jsx';
import { strippedContent, truncate } from 'src/utils/helpers';

function Post({ article, t }) {
  const { id, image } = article;
  const { title, slug, content } = i18n.language ? article[i18n.language] : {};
  return (
    <div className="post-card my-4 border-bottom pb-4">
      <Row className="">
        <Col lg={3}>
          <img src={image} alt="" srcSet="" />
        </Col>
        <Col lg={6} className="mt-4 mt-lg-0 offset-lg-1">
          <div className="title-wrapper">
            <h6 className="title">{title}</h6>
            <div>
              <span>July 20, 2020</span>
            </div>
          </div>

          <div className="description">
            <Markdown>
              {content ? truncate(strippedContent(content), 200, '...') : ''}
            </Markdown>
            <Link
              href={`/media-center/blog/post/${String(title)
                .split(' ')
                .join('-')}?id=${id}`}
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
