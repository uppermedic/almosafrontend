import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { i18n, withTranslation } from 'root/i18n';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';
import Markdown from 'markdown-to-jsx';

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
                <div className="description">
                  <Markdown>
                    {language ? data.content[2][language].content : ''}
                  </Markdown>
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
