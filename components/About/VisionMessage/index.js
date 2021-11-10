import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';

function index({ t, data }) {
  const { language } = i18n;

  return (
    <section className="vision-mission">
      <div className="container-fluid">
        <Row>
          <Col sm="12" md="3">
            <SideTabs items={dataAboutTabs} index={1} />
          </Col>
          <Col sm="12" md="8">
            <h2 className="title">{t('menu:vision and mission')}</h2>

            <Container>
              <div className="section-content">
                <div className="description">
                  <h5>{language ? data.content[0][language].title : ''}</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: language ? data.content[0][language].content : ''
                    }}
                  />
                </div>
                <div className="description">
                  <h5>{language ? data.content[1][language].title : ''}</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: language ? data.content[1][language].content : ''
                    }}
                  />
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default withTranslation('menu')(index);
