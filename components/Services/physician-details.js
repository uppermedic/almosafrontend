import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, i18n, withTranslation } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers.js';

const index = ({ data, t, setcurrentDoctor, currentDoctor }) => {
  const { language } = i18n;

  return (
    <div className="physician">
      <Row className="physician-details m-auto">
        {/*  the comming data will come when create main physician key and value  */}
        <Col lg={4} className="physician-img">
          <img
            src={currentDoctor.image}
            alt={language && currentDoctor[language].name}
            className="shadow"
          />

          {/* <div className="physician-social">
            <Link href="#">
              <i className="fab fa-linkedin fa-3x"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-twitter-square fa-3x"></i>
            </Link>
            <Link href="#">
              <i className="fas fa-link fa-3x"></i>
            </Link>
          </div> */}
        </Col>
        <Col lg={{ size: 8 }} className="pl-sm-5 pr-4 pt-4">
          <h3 className="physician-name">
            {language && currentDoctor[language]?.name}
          </h3>
          <p className="py-2">{language && currentDoctor[language]?.title}</p>
          {language &&
            currentDoctor[language].qualifications &&
            currentDoctor[language].qualifications.length > 0 && (
              <>
                <h3 className="physician-qualifications">
                  {t('common:qualifications')}
                </h3>

                <Markdown>
                  {language
                    ? strippedContent(currentDoctor[language].qualifications)
                    : ''}
                </Markdown>
              </>
            )}
          {language &&
            currentDoctor[language].current_positions &&
            currentDoctor[language].current_positions.length > 0 && (
              <>
                <h3 className="physician-position">
                  {t('common:current_positions')}
                </h3>
                <Markdown>
                  {language
                    ? strippedContent(
                        currentDoctor[language].current_positions || ''
                      )
                    : ''}
                </Markdown>
              </>
            )}
        </Col>
      </Row>
    </div>
  );
};

export default withTranslation(['common', 'menu'])(index);
