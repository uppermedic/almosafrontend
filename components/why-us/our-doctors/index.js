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
      ? data.doctors.data
      : []
  );
  useEffect(() => {
    setcurrentDoctor(
      filter
        ? data.SectionHead && data.SectionHead
        : data.doctors.data.length > 0
        ? data.doctors.data
        : []
    );
    return () => {};
  }, [data]);

  console.log('currentDoctor', currentDoctor);
  console.log('data', data);
  return (
    <section className="our-doctors">
      <Row xs="1" sm="2" md="3" lg="4" className="doctors-cards">
        {data.our_doctors.data.map((doctor, index) => (
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
