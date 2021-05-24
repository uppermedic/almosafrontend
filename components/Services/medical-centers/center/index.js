import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { i18n } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
import Hero from 'src/components/layout/Hero';
import PostHeading from 'src/components/reusableComponents/PostHeading';
import CustomTabs from './CustomTabs';
import BlockWithTitle from 'src/components/Services/medical-programs/reusable-element';
import { cardiologyCenter } from 'src/constants/DB.js';
import DoctorCard from 'src/components/Services/physician-card';

const Content = ({ data, sections, seo }) => {
  const [activeTab, setActive] = useState({ id: '0', items: [] });
  const { language } = i18n;
  const [currentDoctor, setcurrentDoctor] = useState(
    data.physicians.length > 0 ? data.physicians[0] : []
  );
  useEffect(() => {
    setActive(sections[0]);
    return () => {};
  }, [data]);

  useEffect(() => {
    setcurrentDoctor(data.physicians.length > 0 ? data.physicians[0] : []);
    return () => {};
  }, [data]);

  const clickItemFun = item => {
    setActive(item);
  };
  return (
    <div className="medical-center-subpage">
      {/* <Hero>
        <div className="container">
          <PostHeading title={language && seo[language]?.title} color="#fff" />
          <Container>
            <Row xs="1">
               <Col>
                <div className="img-div">
                  <img src={data.image} alt="Header" />
                </div>
              </Col> 
              <Col>
                <div className="par-div">
                  <p>
                    {
                    {language && seo[language]?.content && (
                      <>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: seo[language]?.content
                          }}
                        />
                      </>
                    )}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Hero> */}
      <CustomTabs
        physicians={data.physicians}
        items={sections}
        clickItemFun={clickItemFun}
        activeItemIndex={activeTab}
        currentDoctor={currentDoctor}
        setcurrentDoctor={setcurrentDoctor}
      >
        {activeTab.id === 'physicians' ? (
          <>
            {language && data.physicians && (
              <div className="physician">
                <Row xs="1" sm="2" md="3" lg="4" className="m-0">
                  {data.physicians.map((doctor, index) => (
                    <Col>
                      <DoctorCard
                        key={index}
                        doctor={doctor}
                        setcurrentDoctor={setcurrentDoctor}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            )}
          </>
        ) : (
          <Row xs="1" sm="1" md="2">
            {activeTab &&
              activeTab.items
                .slice(activeTab.items.length > 0 ? 1 : 0) //remove frist ele as this is used to title of tabs and it's description
                .map((item, index) => {
                  return (
                    <Col key={index}>
                      <BlockWithTitle
                        title={language && item[language].title}
                        titleBg="#55b047"
                      >
                        {language && item[language]?.content && (
                          <Markdown>
                            {strippedContent(item[language]?.content)}
                          </Markdown>
                        )}
                      </BlockWithTitle>
                    </Col>
                  );
                })}
          </Row>
        )}
      </CustomTabs>
    </div>
  );
};
export default Content;
