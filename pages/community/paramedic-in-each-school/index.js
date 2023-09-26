import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { PostWithCenterImg } from 'src/components/reusableComponents/Post';
import SmallGallery from 'src/components/SmallGallery';
import { fetchData } from 'src/store/Request.js';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Paramedic = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && data[locale]?.title;

  return (
    <section className="paramedic">
      <Head data={data.seo} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>

      {data.contents[0] && (
        <PostWithCenterImg
          title={locale && data.contents[0][locale].title}
          paragraphs={[locale && data.contents[0][locale].content]}
          theVideo={data.contents[0].video}
          color="#1E455C"
        />
      )}

      {data.contents[1] && (
        <PostWithCenterImg
          title={locale && data.contents[1][locale].title}
          paragraphs={[locale && data.contents[1][locale].content]}
          color="#54AF46"
        />
      )}
      {data.contents[2] && (
        <SmallGallery
          imgs={data.contents[2].images.map(img => {
            return img;
          })}
          bgColor="#EFEAE0"
        />
      )}
      {data.contents[3] && (
        <PostWithCenterImg
          title={locale && data.contents[3][locale].title}
          theVideo={data.contents[3].video}
          color="#1E455C"
        />
      )}
    </section>
  );
};

export default Paramedic;

export async function getServerSideProps({ locale }) {
  let { error, data } = await fetchData('/community/9');
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
