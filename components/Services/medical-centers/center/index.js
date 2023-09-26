import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useTranslation } from 'next-i18next';
import { strippedContent } from 'src/utils/helpers';
import CustomTabs from './CustomTabs';
import BlockWithTitle from 'src/components/Services/medical-programs/reusable-element';
import DoctorCard from 'src/components/Services/physician-card';
import { useRouter } from 'next/router';

const Content = ({ data, sections, seo }) => {
  const { t } = useTranslation(['common', 'menu']);
  const [activeTab, setActive] = useState({ id: '0', items: [] });
  const router = useRouter();
  const { locale } = router;

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
            {locale && data?.physicians && (
              <div className="physician">
                <h2>{t('common:our_physicians')}</h2>

                <Row className="physician-details m-auto">
                  {/*  the comming data will come when create main doctor key and value  */}
                  <Col lg={4} className="physician-img">
                    <img
                      src={currentDoctor?.image}
                      alt={
                        locale &&
                        currentDoctor &&
                        currentDoctor[locale]?.name
                      }
                      className="shadow"
                    />
                  </Col>
                  <Col lg={{ size: 8 }} className="pl-sm-5 pr-4 ">
                    <h3 className="physician-name">
                      {locale &&
                        currentDoctor &&
                        currentDoctor[locale]?.name}
                    </h3>
                    <p className="py-2 physician-title">
                      {locale &&
                        currentDoctor &&
                        currentDoctor[locale]?.title}
                    </p>
                    {locale &&
                      currentDoctor &&
                      currentDoctor[locale]?.qualifications &&
                      currentDoctor[locale].qualifications.length > 0 && (
                        <>
                          <h3 className="physician-qualifications">
                            {t('common:qualifications')}
                          </h3>

                          <p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: locale
                                  ? strippedContent(
                                      currentDoctor[locale].qualifications
                                    )
                                  : ''
                              }}
                            />
                          </p>
                        </>
                      )}
                    {locale &&
                      currentDoctor &&
                      currentDoctor[locale].current_positions &&
                      currentDoctor[locale].current_positions.length > 0 && (
                        <>
                          <h3 className="physician-position">
                            {t('common:current_positions')}
                          </h3>
                          <p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  locale && currentDoctor
                                    ? strippedContent(
                                        currentDoctor[locale]
                                          .current_positions || ''
                                      )
                                    : ''
                              }}
                            />
                          </p>
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
                        title={locale && item[locale].title}
                        titleBg="#55b047"
                      >
                        {locale && item[locale]?.content && (
                          <p>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: strippedContent(item[locale]?.content)
                              }}
                            />
                          </p>
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
