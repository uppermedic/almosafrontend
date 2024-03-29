import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import OurDoctors from 'src/components/why-us/our-doctors';
import { fetchData } from 'src/store/Request.js';
import { getCategories } from 'src/store/actions';
import { connect } from 'react-redux';
import SelectBox from 'src/components/layout/SelectBox';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Our_Doctors({ data, getCategories, categories }) {
  const router = useRouter();
  const { locale } = router;
  const {
    doctors: { last_page }
  } = data;

  const [selectId, setselectId] = useState('all');
  const [filter, setfilter] = useState(false);

  useEffect(() => {
    getCategories('/sections');
    // router.push(`/${locale}/our-doctors`);
    return () => {};
  }, []);
 
  const handleFilter = ({ target: { value } }) => {
    setselectId(value);
    if (value === 'all') {
      setfilter(false);
      router.push(`/${locale}/our-doctors/?page=1`);
    } else if (value !== 'all') {
      setfilter(true);
      router.push(`/${locale}/our-doctors/?page=1&id=${value}`);
    }
  };

  /********************************** */

  const handlePageClick = ({ selected }) => {
    if (selectId === 'all') {
      router.push(`/${locale}/our-doctors/?page=${selected + 1}`);
    } else {
      router.push(
        `/${locale}/our-doctors/?page=${selected + 1}&id=${selectId}`
      );
    }
  };

  const titleHero = locale && data.page?.seo[locale]?.title;

  return (
    <div className="almoosa-doctors">
      <Head data={data.page.seo}></Head>
      <Hero bg={data.page.page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero}</h1>
        </div>
      </Hero>
      <div className="container">
        <Row className="filters mt-5 mb-5">
          <Col xl={2} md={3} sm={3}>
            <span className="pb-3">
              {(locale === 'en' && 'Department ') || ' القسم'} :
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const locale =context.locale
  const { page, id } = context.query;
  let path = '/doctors';
  if (page) {
    path = `/doctors/?page=${page}`;
  }
  if (page && id) {
    path = `/doctors/filter/id=${id}/?page=${page}`;
  }
  let { error, data } = await fetchData(path);
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data , ...(await serverSideTranslations(locale, [
      'common',
      'about',
      'news',
      'menu',
      'header',
      'footer',
      'patient_guide'
    ])) }
  };
}

const mapStateToProps = state => ({
  categories: state.Globals.categories
});

export default connect(mapStateToProps, { getCategories })(Our_Doctors);
