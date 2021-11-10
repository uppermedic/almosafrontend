import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';

function index({ t, data }) {
  const { language } = i18n;

  return (
    <section className="values">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={2} />
          </Col>
          <Col sm="12" md="8">
            <h2 className="title">{t('menu:core values')}</h2>

            <Container>
              <div className="section-content">
                <p className="description">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: language && data.content[2][language].content
                    }}
                  />
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default withTranslation('menu')(index);
