import React from 'react';
import { Row, Col } from 'reactstrap';
import Markdown from 'markdown-to-jsx';
export default function Article({ article, originalArticle }) {
  return (
    <Row>
      <Col xs={12} className="mt-2 mb-5">
        <img
          className="thumbnail shadow-lg rounded"
          src={originalArticle?.image}
        />
      </Col>
      <Col xs={12} className="post-content">
        <Markdown>{article.content}</Markdown>
      </Col>
    </Row>
  );
}
