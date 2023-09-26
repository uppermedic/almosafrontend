import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Row, Col } from 'reactstrap';
import { truncate, strippedContent } from 'src/utils/helpers.js';
import { useRouter } from 'next/router';

const Index = ({  sectionData }) => {
const { t } = useTranslation('common');

  const router = useRouter();
  const { locale } = router;

  const boxesData =
    sectionData?.length > 0 &&
    sectionData?.map(box => {
      return {
        ...box,
        readMore: false
      };
    });

  const handleReadMore = idx => {
    const stateData = [...state];
    stateData[idx]['readMore'] = !stateData[idx]['readMore'];
    setstate(stateData);
  };

  const [state, setstate] = useState(boxesData);
  return (
    <section className="traning-staff-section">
      <Row>
        {state.map((box, idx) => (
          <Col key={idx} sm={12} md={6} lg={4}>
            <div className="boxes">
              <div className="title">{locale && box[locale].title}</div>
              <div
                className="box-content"
                style={{ height: box.readMore ? 'auto' : 310 }}
              >
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: box.readMore
                        ? locale && box[locale].content
                        : truncate(
                            strippedContent(
                              (locale && box[locale].content) || 'No Data'
                            ),
                            200,
                            '......'
                          )
                    }}
                  />
                </p>

                <button className="btn" onClick={() => handleReadMore(idx)}>
                  {box.readMore ? t('read_less') : t('read_more')}
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};
export default Index;
