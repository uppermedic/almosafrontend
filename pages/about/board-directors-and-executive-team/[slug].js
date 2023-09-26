import React, { useEffect, useState } from 'react';
import Head from 'src/components/layout/head';
import DoctorPage from 'src/components/About/BoardGoverners/doctore-page';
import { getCategories } from 'src/store/actions';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { removeSpChar } from 'src/utils/helpers';
import { fetchData } from 'src/store/Request.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function BordDirectors({ data }) {
  const router = useRouter();
  const { locale } = router;
  const [doctorData, setdoctorData] = useState({});

  useEffect(() => {
    if (locale) {
      const data = JSON.parse(localStorage.getItem('doctor'));
      router.push(
        `/${locale}/about/board-directors-and-executive-team/${removeSpChar(
          String(data[locale]?.slug)
        )
          .split(' ')
          .join('-')}/?id=${data?.id}`
      );
    }
  }, [locale]);

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
      <Head data={locale && data[locale]}></Head>
      <DoctorPage doctorData={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const locale=context.locale
  let { error, data } = await fetchData(`/page-item/${context.query.id}`);
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [
        'common',
        'about',
        'news',
        'menu',
        'header',
        'footer',
        'patient_guide'
      ]))
    }
  };
}

export default connect(null, { getCategories })(BordDirectors);
