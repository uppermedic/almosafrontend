import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import DoctorCard from './doctor-card';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';
import PageContent from 'components/reusableComponents/PageContent';

const index = ({ GovernersData, TeamData, contentData }) => {
  const { language } = i18n;

  const [currentDoctor, setcurrentDoctor] = useState({});

  return (
    <section className="our-doctors bord-governers">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={6} />
          </Col>
          <Col sm="12" md="8">
            {contentData?.length > 0 &&
              contentData?.map(cont => (
                <>
                  <PageContent itemContent={cont} />
                  <Container>
                    <Row xs="1" sm="2" md="3" lg="4" className="doctors-cards">
                      {Array.isArray(cont?.page_items) &&
                        cont?.page_items?.length > 0 &&
                        cont.page_items?.map((item, idx) => (
                          <Col>
                            <DoctorCard
                              key={idx}
                              doctor={item}
                              setcurrentDoctor={setcurrentDoctor}
                              currentDoctor={currentDoctor}
                              hasRef={true}
                            />
                          </Col>
                        ))}
                    </Row>
                  </Container>
                </>
              ))}

            {/* <Row>
              <Col>
                <h2 className="title">
                  {(language == 'en' && 'Board of Governers') ||
                    'أعضاء مجلس الإدارة'}
                </h2>
              </Col>
            </Row>
            <Container>
              <div className="board-governers">
                <Row xs="1" sm="2" md="3" lg="4" className="doctors-cards">
                  {GovernersData.length > 0 &&
                    GovernersData.map((doctor, index) => (
                      <Col>
                        <DoctorCard
                          key={index}
                          doctor={doctor}
                          setcurrentDoctor={setcurrentDoctor}
                          currentDoctor={currentDoctor}
                          hasRef={true}
                        />
                      </Col>
                    ))}
                </Row>
              </div>
              <div className="leadership-team">
                <Row>
                  <Col className="pt-5 ">
                    <h2 className="title">
                      {(language == 'en' && 'Leadership Team') ||
                        'الفريق التنفيذي'}
                    </h2>
                  </Col>
                </Row>
                <Row xs="1" sm="2" md="3" lg="4" className="doctors-cards">
                  {TeamData.length > 0 &&
                    TeamData.map((doctor, index) => (
                      <Col>
                        <DoctorCard
                          key={index}
                          doctor={doctor}
                          setcurrentDoctor={setcurrentDoctor}
                          currentDoctor={currentDoctor}
                          hasRef={true}
                        />
                      </Col>
                    ))}
                </Row>
              </div>
            </Container> */}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withTranslation(['common', 'menu'])(index);
