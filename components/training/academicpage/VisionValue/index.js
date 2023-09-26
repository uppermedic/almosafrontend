import React from 'react';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';

const index = ({ visionValueData }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <section className="vision-value-section">
      <Row>
        {visionValueData?.length > 0 &&
          visionValueData?.map((box, idx) => (
            <Col key={idx} sm={12} md={6} lg={4}>
              <div className="boxes">
                <div className="title">{locale ? box[locale].title : ''}</div>
                <div className="box-content">
                  <p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: locale ? box[locale].content : ' '
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
