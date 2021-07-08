import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { i18n, Link, withTranslation } from 'root/i18n';
import { strippedContent } from 'src/utils/helpers';
import Markdown from 'markdown-to-jsx';
import Hero from 'src/components/layout/Hero';
import PostHeading from 'src/components/reusableComponents/PostHeading';
import CustomTabs from './CustomTabs';
import BlockWithTitle from 'src/components/Services/medical-programs/reusable-element';
import { cardiologyCenter } from 'src/constants/DB.js';
import DoctorCard from 'src/components/Services/physician-card';

const Content = ({ data, sections, seo, t }) => {
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
                <h2>{t('common:our physicians')}</h2>

                <Row className="physician-details m-auto">
                  {/*  the comming data will come when create main doctor key and value  */}
                  <Col lg={4} className="physician-img">
                    <img
                      src={currentDoctor?.image}
                      alt={
                        language &&
                        currentDoctor &&
                        currentDoctor[language]?.name
                      }
                      className="shadow"
                    />
                  </Col>
                  <Col lg={{ size: 8 }} className="pl-sm-5 pr-4 ">
                    <h3 className="physician-name">
                      {language &&
                        currentDoctor &&
                        currentDoctor[language]?.name}
                    </h3>
                    <p className="py-2 physician-title">
                      {language &&
                        currentDoctor &&
                        currentDoctor[language]?.title}
                    </p>
                    {language &&
                      currentDoctor &&
                      currentDoctor[language].qualifications &&
                      currentDoctor[language].qualifications.length > 0 && (
                        <>
                          <h3 className="physician-qualifications">
                            {t('common:qualifications')}
                          </h3>

                          <Markdown>
                            {language
                              ? strippedContent(
                                  currentDoctor[language].qualifications
                                )
                              : ''}
                          </Markdown>
                        </>
                      )}
                    {language &&
                      currentDoctor &&
                      currentDoctor[language].current_positions &&
                      currentDoctor[language].current_positions.length > 0 && (
                        <>
                          <h3 className="physician-position">
                            {t('common:current_positions')}
                          </h3>
                          <Markdown>
                            {language && currentDoctor
                              ? strippedContent(
                                  currentDoctor[language].current_positions ||
                                    ''
                                )
                              : ''}
                          </Markdown>
                        </>
                      )}
                  </Col>
                </Row>

                <Row
                  xs="1"
                  sm="2"
                  md="3"
                  lg="4"
                  className="m-0 py-3 physicians-cards"
                >
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
export default withTranslation(['common', 'menu'])(Content);
