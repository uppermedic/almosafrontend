import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';
import PageContent from 'components/reusableComponents/PageContent';

import Card from './Card';

const index = ({ contentData }) => {
  return (
    <section className="awards">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={4} />
          </Col>
          <Col sm="12" md="8">
            {contentData?.length > 0 &&
              contentData?.map(cont => (
                <>
                  {/* <Row>
                    <Col>
                      <h2>{language && cont[language]?.title}</h2>
                    </Col>
                  </Row> */}
                  <PageContent itemContent={cont} />

                  <Container>
                    <Row className="">
                      {Array.isArray(cont?.page_items) &&
                        cont?.page_items?.length > 0 &&
                        cont.page_items?.map((item, idx) => (
                          <Col xl={6} className="col_1">
                            <Card item={item} key={idx} />
                          </Col>
                        ))}
                    </Row>
                  </Container>
                </>
              ))}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default withTranslation('menu')(index);
