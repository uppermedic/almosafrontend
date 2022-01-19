import { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { withTranslation } from 'root/i18n';
import DoctorCard from './doctor-card';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';
import { useRouter } from 'next/router';

const index = ({ data, handlePageClick, last_page }) => {
  const [currentDoctor, setcurrentDoctor] = useState([]);
  const router = useRouter();
  const { page } = router?.query;

  useEffect(() => {
    setcurrentDoctor(data.our_doctors.data);
  }, [data]);

  return (
    <section className="our-doctors">
      <Row xs="1" sm="2" md="3" lg="4" className="doctors-cards">
        {currentDoctor?.length > 0 &&
          currentDoctor.map((doctor, index) => (
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
            forcePage={(page ? page : 1) - 1}
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
