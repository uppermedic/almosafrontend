import React from 'react';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';

const index = ({ sectionData }) => {
  const router = useRouter();
  const { locale } = router;


  const boxesData =
    sectionData?.length > 0 &&
    sectionData?.map((box, idx) => {
      return {
        ...box,
        class: idx === 1 ? 'patient-family' : idx === 2 ? 'post-graduate' : ''
      };
    });

  return (
    <section className="cpdd-section">
      <Row>
        <Col>
          {locale && (
            <p className="cpdd-paragraph">
              <div
                dangerouslySetInnerHTML={{
                  __html: boxesData[0][locale]?.content || ' '
                }}
              />
            </p>
          )}
        </Col>
      </Row>
      <Row>
        {boxesData.map((box, idx) => (
          <Col xs={12} key={idx}>
            {idx > 0 && (
              <div className="boxes ">
                <div className={box.class}>
                  <div className="title">{locale ? box[locale].title : ''}</div>
                  <div className="box-content">
                    {locale && (
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: box[locale].content || ' '
                          }}
                        />
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default index;
