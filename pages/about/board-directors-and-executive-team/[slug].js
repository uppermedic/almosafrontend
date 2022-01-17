import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import DoctorPage from 'src/components/About/BoardGoverners/doctore-page';
import { i18n } from 'root/i18n';
import { getCategories } from 'src/store/actions';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { removeSpChar } from 'src/utils/helpers';
import { fetchData } from 'src/store/Request.js';

function BordDirectors({ data }) {
  const { language } = i18n;

  const router = useRouter();
  const { locale } = router;
  const [doctorData, setdoctorData] = useState({});

  useEffect(() => {
    if (language && locale) {
      const data = JSON.parse(localStorage.getItem('doctor'));
      router.push(
        `/${language}/about/board-directors-and-executive-team/${removeSpChar(
          String(data[language]?.slug)
        )
          .split(' ')
          .join('-')}/?id=${data?.id}`
      );
    }
  }, [language, locale]);

  useEffect(() => {
    setdoctorData(
      JSON.parse(localStorage.getItem('doctor'))
        ? JSON.parse(localStorage.getItem('doctor'))
        : {}
    );

    return () => {};
  }, []);

  return (
    <div className="almoosa-doctors doctor-slug-page">
      <Head data={language && data[language]}></Head>
      <DoctorPage doctorData={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let { error, data } = await fetchData(`/page-item/${context.query.id}`);
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}

export default connect(null, { getCategories })(BordDirectors);
