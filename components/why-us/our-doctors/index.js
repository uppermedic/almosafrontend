import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, i18n, withTranslation } from 'root/i18n';
import DoctorCard from './doctor-card';
import Markdown from 'markdown-to-jsx';
import { strippedContent, getEmbedVid } from 'src/utils/helpers.js';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';

const index = ({
  data,
  t,
  categories,
  handleSelectChange,
  filter,
  handlePageClick,
  last_page
}) => {
  const { language } = i18n;

  const [currentDoctor, setcurrentDoctor] = useState(
    filter
      ? data.SectionHead && data.SectionHead
      : data.doctors.data.length > 0
      ? data.doctors.data[0]
      : []
  );
  useEffect(() => {
    setcurrentDoctor(
      filter
        ? data.SectionHead && data.SectionHead
        : data.doctors.data.length > 0
        ? data.doctors.data[0]
        : []
    );
    return () => {};
  }, [data]);
  return (
    <section className="our-doctors">
      <Row className="doctor-details m-auto">
        {/*  the comming data will come when create main doctor key and value  */}
        <Col lg={4} className="doctor-img">
          <img
            src={currentDoctor?.image}
            alt={language && currentDoctor && currentDoctor[language]?.name}
            className="shadow"
          />

          {/* <div className="doctor-social">
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
        <Col lg={{ size: 8 }} className="pl-sm-5 pr-4 ">
          <h3 className="doctor-name">
            {language && currentDoctor && currentDoctor[language]?.name}
          </h3>
          <p className="py-2 doctor-title">
            {language && currentDoctor && currentDoctor[language]?.title}
          </p>
          {language &&
            currentDoctor &&
            currentDoctor[language].qualifications &&
            currentDoctor[language].qualifications.length > 0 && (
              <>
                <h3 className="doctor-qualifications">
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
            currentDoctor &&
            currentDoctor[language].current_positions &&
            currentDoctor[language].current_positions.length > 0 && (
              <>
                <h3 className="doctor-position">
                  {t('common:current_positions')}
                </h3>
                <Markdown>
                  {language && currentDoctor
                    ? strippedContent(
                        currentDoctor[language].current_positions || ''
                      )
                    : ''}
                </Markdown>
              </>
            )}
        </Col>
      </Row>
      <Row>
        <Col className="pt-5 ">
          <h2>{t('menu:our doctors')}</h2>
        </Col>
      </Row>

      <Row xs="1" sm="2" md="3" lg="4" className="doctors-cards">
        {data.doctors.data.map((doctor, index) => (
          <Col>
            <DoctorCard
              key={index}
              doctor={doctor}
              setcurrentDoctor={setcurrentDoctor}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-center mb-4">
          <ReactPaginate
            nextLabel={<NextFC />}
            previousLabel={<PrevFC />}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={last_page}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </Col>
      </Row>
    </section>
  );
};

const mapStateToProps = state => ({
  categories: state.Globals.categories
});

export default withTranslation(['common', 'menu'])(
  connect(mapStateToProps)(index)
);
