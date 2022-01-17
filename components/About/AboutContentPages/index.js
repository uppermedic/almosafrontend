import React from 'react';
import { Row, Col } from 'reactstrap';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';
import PageContent from 'components/reusableComponents/PageContent';

function index({ contentData, sideTabIndex }) {
  return (
    <section className="page-section">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={sideTabIndex} />
          </Col>
          <Col sm="12" md="8">
            {contentData?.length > 0 &&
              contentData?.map(cont => <PageContent itemContent={cont} />)}
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default index;
