import React from 'react';
import {
  PostWithRightImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import SmallGallery from 'src/components/SmallGallery';
import { i18n, withTranslation } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

const TasteOfArt = ({ data, t }) => {
  const lang = i18n.language;
  const head_data = {
    ar: {
      title: 'معرض الصحة مذاق الفن',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Taste of Art',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <section className="taste_of_art">
      <Head data={head_data}></Head>
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{lang && data[lang].title} </h1>
        </div>
      </Hero>
      <PostWithCenterImg
        title={lang && data.contents[0][lang].title}
        color="#67AF5A"
        paragraphs={[lang && data.contents[0][lang].content]}
      />

      <SmallGallery
        bgColor="#1E455C"
        imgs={[data.contents[1].images[0], data.contents[1].images[1]]}
      />

      <PostWithCenterImg
        title={lang && data.contents[2][lang].title}
        color="#1E455C"
        paragraphs={[lang && data.contents[3][lang].content]}
      />

      <PostWithRightImg
        theImg={data.contents[2].images[0]}
        paragraphs={[lang && data.contents[2][lang].content]}
      />
    </section>
  );
};

export default withTranslation('menu')(TasteOfArt);

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community/5');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
