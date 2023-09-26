import React from 'react';
import {
  PostWithRightImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import SmallGallery from 'src/components/SmallGallery';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TasteOfArt = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data[locale]?.title;

  return (
    <section className="taste_of_art">
      <Head data={data.seo}></Head>
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>
      <PostWithCenterImg
        title={locale && data.contents[0][locale].title}
        color="#67AF5A"
        paragraphs={[locale && data.contents[0][locale].content]}
      />

      <SmallGallery
        bgColor="#1E455C"
        imgs={[data.contents[1].images[0], data.contents[1].images[1]]}
      />

      <PostWithCenterImg
        title={locale && data.contents[2][locale].title}
        color="#1E455C"
        paragraphs={[locale && data.contents[3][locale].content]}
      />

      <PostWithRightImg
        theImg={data.contents[2].images[0]}
        paragraphs={[locale && data.contents[2][locale].content]}
      />
    </section>
  );
};

export default TasteOfArt;

export async function getServerSideProps({ locale }) {
  let { error, data } = await fetchData('/community/5');
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
