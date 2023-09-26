import React from 'react';
import {
  PostWithLeftImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Cooperation = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data[locale]?.title;

  return (
    <section className="cooperation">
      <Head data={data.seo} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>
      {data.contents[0] && (
        <PostWithLeftImg
          title={locale && data.contents[0][locale].title}
          color="#55B047"
          theImg={data.contents[0].images[0]}
          paragraphs={[locale && data.contents[0][locale].content]}
        />
      )}

      {data.contents[1] && (
        <PostWithCenterImg
          title={locale && data.contents[1][locale].title}
          color="#55B047"
          paragraphs={[locale && data.contents[1][locale].content]}
          theVideo={data.contents[1].video}
        />
      )}
    </section>
  );
};

export default Cooperation;

export async function getServerSideProps({ locale }) {
  let { error, data } = await fetchData('/community/3');
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
