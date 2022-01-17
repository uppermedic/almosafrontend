import React from 'react';
import { i18n } from 'root/i18n';
import { Row, Col } from 'reactstrap';

const index = ({ visionValueData }) => {
  const lang = i18n.language;
  return (
    <section className="vision-value-section">
      <Row>
        {visionValueData?.length > 0 &&
          visionValueData?.map((box, idx) => (
            <Col key={idx} sm={12} md={6} lg={4}>
              <div className="boxes">
                <div className="title">{lang ? box[lang].title : ''}</div>
                <div className="box-content">
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: lang ? box[lang].content : ' '
                      }}
                    />
                  </p>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </section>
  );
};

export default index;
