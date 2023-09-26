import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { strippedContent } from 'src/utils/helpers';
import ReusableDropdown from 'src/components/Services/medical-programs/reusable-dropdown/';
import BlockWithTitle from 'src/components/Services/medical-programs/reusable-element/';
import DoctorCard from 'src/components/Services/physician-card';
import { useRouter } from 'next/router';

const Content = ({ physicians, data }) => {
  const [active, setActive] = useState({ id: '0', items: [] });
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (data?.length > 0) {
      setActive(data && data[0]);
    } else {
      setActive({ id: 'physicians', items: [] });
    }
    return () => {};
  }, [data]);
  const clickItemFun = item => {
    setActive(item);
  };

  return (
    <div>
      <ReusableDropdown
        physicians={physicians}
        items={data}
        clickItemFun={clickItemFun}
        activeItemIndex={active?.id}
      />

      {/* Here will be the content will change according to the dropdown selected item */}

      {/* will depending on the active index on the dropdown item wich will pass with the click item function */}
      {active?.items && active?.items[0] && (
        <section className="center-paragraph">
          <div className="container">
            <p>
              {locale && active?.items[0][locale]?.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: active?.items[0][locale]?.content
                  }}
                />
              )}
            </p>
          </div>
        </section>
      )}

      <section className="grid-info">
        <Container>
          {active?.id === 'physicians' ? (
            <>
              {locale && physicians && (
                <div className="physician">
                  <Row
                    xs="1"
                    sm="2"
                    md="3"
                    lg="4"
                    className="physicians-cards m-0"
                  >
                    {physicians.map((doctor, index) => (
                      <Col>
                        <DoctorCard
                          key={index}
                          doctor={doctor}
                          setcurrentDoctor={() => {}}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </>
          ) : (
            <Row xs="1" md="2">
              {active?.items
                .slice(active?.items.length > 0 ? 1 : 0) //remove frist ele as this is used to title of tabs and it's description?
                .map((item, index) => {
                  return (
                    <Col key={index}>
                      <BlockWithTitle title={item[locale].title}>
                        <p>
                          {locale && item[locale]?.content && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: strippedContent(item[locale]?.content)
                              }}
                            />
                          )}
                        </p>
                      </BlockWithTitle>
                    </Col>
                  );
                })}
            </Row>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Content;
