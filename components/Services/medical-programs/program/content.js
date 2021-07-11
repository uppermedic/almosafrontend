import React, { useEffect, useState } from 'react';
import { i18n } from 'root/i18n';
import { Col, Container, Row } from 'reactstrap';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
import ReusableDropdown from 'src/components/Services/medical-programs/reusable-dropdown/';
import BlockWithTitle from 'src/components/Services/medical-programs/reusable-element/';
import DoctorCard from 'src/components/Services/physician-card';

const Content = ({ physicians, data }) => {
  const [active, setActive] = useState({ id: '0', items: [] });
  const { language } = i18n;
  useEffect(() => {
    setActive(data && data[0]);
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
        activeItemIndex={active.id}
      />

      {/* Here will be the content will change according to the dropdown selected item */}

      {/* will depending on the active index on the dropdown item wich will pass with the click item function */}
      {active.items && active.items[0] && (
        <section className="center-paragraph">
          <div className="container">
            {/* <p>
              {language && active.items[0][language]?.content && (
                <Markdown>
                  {strippedContent(active.items[0][language]?.content)}
                </Markdown>
              )}
            </p> */}
            {language && active.items[0][language]?.content && (
              <div
                dangerouslySetInnerHTML={{
                  __html: active.items[0][language]?.content
                }}
              />
            )}
          </div>
        </section>
      )}

      <section className="grid-info">
        <Container>
          {active.id === 'physicians' ? (
            <>
              {language && physicians && (
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
              {active.items
                .slice(active.items.length > 0 ? 1 : 0) //remove frist ele as this is used to title of tabs and it's description?
                .map((item, index) => {
                  return (
                    <Col key={index}>
                      <BlockWithTitle title={item[language].title}>
                        <p>
                          {language && item[language]?.content && (
                            <Markdown>
                              {strippedContent(item[language]?.content)}
                            </Markdown>
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
