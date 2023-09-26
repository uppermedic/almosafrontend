import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideTabs from 'components/layout/DynamicRouteTabs';
import VisionValue from './VisionValue';
import OurTeam from './OurTaem';
import AcademicTabs from './AcademicTabs';
import Fellowship from './Fellowship';
import { dataACademicTabs } from 'utils/datafile';
import { useRouter } from 'next/router';

const Index = ({ data, academicTeam }) => {
  const router = useRouter();
  const { locale } = router;


  return (
    <section className="academic-affairs">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataACademicTabs} index={2} />
          </Col>
          <Col sm="12" md="8">
            <h2 className="title">{data[0][locale]?.title}</h2>

            <Container>
              <div className="content-sections">
                <section className="intro-section">
                  {locale && (
                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data[0][locale]?.content || ' '
                        }}
                      />
                    </p>
                  )}
                </section>

                {data[0]?.page_items?.length > 0 && (
                  <VisionValue visionValueData={data[0]?.page_items} />
                )}

                {academicTeam?.length > 0 && (
                  <OurTeam ourTeamData={academicTeam} />
                )}

                {data[1]?.page_items?.length > 0 && (
                  <AcademicTabs
                    sectionContentData={data[1]}
                    sectionsData={data[1]?.page_items}
                  />
                )}

                {data[2]?.page_items?.length > 0 && (
                  <Fellowship fellowshipData={data[2]} />
                )}
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Index;
