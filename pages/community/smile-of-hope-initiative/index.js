import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import {
  PostWithCenterImg,
  PostWithRightImg
} from 'src/components/reusableComponents/Post';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Cleft = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data[locale]?.title;

  return (
    <div className="cleft">
      <Head data={data.seo} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>

      {data.contents[0] && (
        <PostWithRightImg
          title={(locale && data.contents[0][locale].title) || 'No Title Yet'}
          paragraphs={[
            (locale && data.contents[0][locale].content) || 'No Content Yet'
          ]}
          theImg={data.contents[0].images[0]}
          color="#55B047"
        />
      )}

      {data.contents[1] && (
        <PostWithCenterImg
          title={(locale && data.contents[1][locale].title) || 'No Title Yet'}
          paragraphs={[
            (locale && data.contents[1][locale].content) || 'No Content Yet'
          ]}
          theVideo={data.contents[1].video}
          color="#1E455C"
        />
      )}
    </div>
  );
};

export default Cleft;

export async function getServerSideProps({locale}) {
  let { error, data } = await fetchData('/community/7');
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
