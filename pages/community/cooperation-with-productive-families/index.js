import React from 'react';
import {
  PostWithLeftImg,
  PostWithCenterImg
} from 'src/components/reusableComponents/Post';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

const Cooperation = ({ data }) => {
  const lang = i18n.language;
  const head_data = {
    ar: {
      title: 'التعاون مع الأسر المنتجة',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Cooperation with Produsctive Familes',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <section className="cooperation">
      <Head data={head_data} />
      <Hero>
        <img src={data.cover_image} alt="hero-cover" className="hero-cover" />
        <div className="hero-content">
          <h2 className="title">{lang && data[lang].title} </h2>
        </div>
      </Hero>
      {data.contents[0] && (
        <PostWithLeftImg
          title={lang && data.contents[0][lang].title}
          color="#55B047"
          theImg={data.contents[0].images[0]}
          paragraphs={[lang && data.contents[0][lang].content]}
        />
      )}

      {data.contents[1] && (
        <PostWithCenterImg
          title={lang && data.contents[1][lang].title}
          color="#55B047"
          paragraphs={[lang && data.contents[1][lang].content]}
          theVideo={data.contents[1].video}
        />
      )}
    </section>
  );
};

export default Cooperation;

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community/3');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
