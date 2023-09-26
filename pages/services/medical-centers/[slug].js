import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from 'src/store/Request.js';
import Center from 'src/components/Services/medical-centers/center';
import Head from 'src/components/layout/head';
import Hero from '../../../components/layout/Hero';
import { removeSpChar } from 'src/utils/helpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Post = ({ data }) => {
  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
    if (locale) {
      router.push(
        `/${locale}/services/medical-centers/${removeSpChar(
          String(data.seo[locale].title)
        )
          .split(' ')
          .join('-')}/?id=${data.id}`
      );
    }
  }, [locale]);

  return (
    <div className="_single-post-page single-medical-center">
      <Head data={data['seo']} />
      <Hero bg={data.image}>
        <div className="hero-content">
          <h2 className="title">{locale && data.seo[locale]?.title}</h2>
        </div>
      </Hero>
      {data['sections'].length > 0 && (
        <Center data={data} sections={data['sections']} seo={data['seo']} />
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const locale = context.locale;
  if (context.query.id) {
    //settings
    let { error, data } = await fetchData(
      `/services/single/${context.query.id}`
    );

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
  } else {
    return {
      notFound: true
    };
  }
}

export default Post;
