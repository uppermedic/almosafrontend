import React from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
import { Row, Col } from 'reactstrap';
export default function Post() {
  return (
    <div className="post-card">
      <Row>
        <Col xs={12}>
          <img src="/images/Blog/post-img.png" alt="" srcSet="" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="title">
          <h3>write article title here</h3>
          <div>
            <span>PREMENSTRUAL SYNDROME (PMS) |</span>
            <span>July 20, 2020 | Name</span>
          </div>
        </Col>
        <Col xs={12} className="description">
          <p>
            Ambiguity surrounds the changes that occur to the female before
            menstruation and the menstrual CYCLE, unfortunately there are lot of
            misconceptions around that topic, in this article we will try to
            cover a phenomenon that every female should know and be aware of.
            Premenstrual syndrome
          </p>
          <Link href="/blog/search-result">
            <a>Read More...</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
