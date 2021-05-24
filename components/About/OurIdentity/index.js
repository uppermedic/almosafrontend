import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';
import { i18n } from 'root/i18n';
import SideTabs from 'components/layout/DynamicRouteTabs';
import { dataAboutTabs } from 'utils/datafile';

export default function index(props) {
  const icons = ['far fa-eye', 'far fa-comment-alt', 'fas fa-robot'];
  const [indexCard, setIndexCard] = useState(0);
  const { language } = i18n;

  const handleToggleIcons = index => {
    setIndexCard(index);
  };
  return (
    <>
      <section className="ourIdentity">
        <div className="container-fluid">
          <Row>
            <Col sm="12" md="3">
              <SideTabs items={dataAboutTabs} index={1} />
            </Col>
            <Col sm="12" md="8">
              <Container>
                <Row md="3" className="text-center">
                  {icons.map((icon, idx) => (
                    <Col>
                      <div
                        className={
                          idx === indexCard
                            ? 'icon-identity-active'
                            : 'icon-identity'
                        }
                        onClick={() => handleToggleIcons(idx)}
                      >
                        <i className={icon}></i>
                      </div>
                      <h2
                        className={
                          idx === indexCard
                            ? 'identity-title-active'
                            : 'identity-title'
                        }
                      >
                        {(language && props.data[idx][language]['title']) || ''}
                      </h2>
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col>
                    <Card item={props.data[indexCard]} />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
