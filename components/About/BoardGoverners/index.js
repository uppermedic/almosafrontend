import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import DoctorCard from './doctor-card';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';

const index = ({ GovernersData, TeamData, t }) => {
  const { language } = i18n;

  const [currentDoctor, setcurrentDoctor] = useState({});

  return (
    <section className="our-doctors">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={6} />
          </Col>
          <Col sm="12" md="8">
            <Container>
              <div className="board-governers">
                <Row>
                  <Col>
                    <h2 className="title">
                      {(language == 'en' && 'Board Governers') ||
                        'أعضاء مجلس الإدارة'}
                    </h2>
                  </Col>
                </Row>
                <Row xs="1" sm="2" md="3" lg="4" className="doctors-cards">
                  {GovernersData.map((doctor, index) => (
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
                  {TeamData.map((doctor, index) => (
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
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withTranslation(['common', 'menu'])(index);
