import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import OurDoctors from 'src/components/why-us/our-doctors';
import { fetchData, postData } from 'src/store/Request.js';
import ReactPaginate from 'react-paginate';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';
import { i18n } from 'root/i18n';
import { getCategories } from 'src/store/actions';
import { connect } from 'react-redux';
import SelectBox from 'src/components/layout/SelectBox';

function Our_Doctors({ data, getCategories, categories }) {
  console.log('data', data);
  const { language } = i18n;
  const router = useRouter();
  const {
    doctors: { last_page }
  } = data;

  const [selectId, setselectId] = useState('all');
  const [filter, setfilter] = useState(false);

  useEffect(() => {
    getCategories('/sections');
    router.push(`?page=1`);
    return () => {};
  }, []);

  const handleFilter = ({ target: { value } }) => {
    setselectId(value);
    if (value === 'all') {
      setfilter(false);
      router.push(`?page=1`);
    } else if (value !== 'all') {
      setfilter(true);
      router.push(`?page=1&id=${value}`);
    }
  };

  /********************************** */

  const handlePageClick = ({ selected }) => {
    if (selectId === 'all') {
      router.push(`?page=${selected + 1}`);
    } else {
      router.push(`?page=${selected + 1}&id=${selectId}`);
    }
  };

  console.log('doctors', data);

  return (
    <div className="almoosa-doctors">
      <Head data={data.page.seo}></Head>
      {/* /images/why_choose_us/our-doctors/our-doctors-hero.png */}
      <Hero>
        <img
          src={data.page.page_cover}
          alt="hero-cover"
          className="hero-cover"
        />
        <div className="hero-content">
          <h2 className="title">{data.page.seo[language]?.title}</h2>
        </div>
      </Hero>
      <div className="container">
        <Row className="filters mt-5 mb-5">
          <Col xl={2} md={3} sm={3}>
            <span className="pb-3">
              {(language === 'en' && 'Department ') || ' القسم'} :
            </span>
          </Col>
          <Col xl={4} md={5} sm={9}>
            <SelectBox
              options={categories}
              default_title="all_departments"
              handleChange={handleFilter}
            />
          </Col>
        </Row>
        <OurDoctors
          data={data}
          handleSelectChange={handleFilter}
          selectId={selectId}
          last_page={last_page}
          handlePageClick={handlePageClick}
          filter={filter}
        />
      </div>
      <Row>
        {/* <Col md={12} className="d-flex justify-content-center">
            <button>Show All</button>
          </Col> */}
        {/* <Col xs={12} className="d-flex justify-content-center mb-4">
          <ReactPaginate
            nextLabel={<NextFC />}
            previousLabel={<PrevFC />}
            // previousLabel={'<'}
            // nextLabel={'>'}
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
        </Col> */}
      </Row>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('context');
  const { page, id } = context.query;
  let path = '/doctors';
  if (page) {
    path = `/doctors?page=${page}`;
  }
  if (page && id) {
    path = `/doctors/filter/id=${id}?page=${page}`;
  }
  let { error, data } = await fetchData(path);
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

const mapStateToProps = state => ({
  categories: state.Globals.categories
});

export default connect(mapStateToProps, { getCategories })(Our_Doctors);
