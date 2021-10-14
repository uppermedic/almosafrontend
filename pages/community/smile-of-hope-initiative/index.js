import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import {
  PostWithCenterImg,
  PostWithRightImg
} from 'src/components/reusableComponents/Post';
import { i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

const Cleft = ({ data }) => {
  const lang = i18n.language;
  const head_data = {
    ar: {
      title: 'علاج الشفة الأرنبية',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Cleft Lip Initiative',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="cleft">
      <Head data={head_data} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h2 className="title">{lang && data[lang].title} </h2>
        </div>
      </Hero>

      {data.contents[0] && (
        <PostWithRightImg
          title={(lang && data.contents[0][lang].title) || 'No Title Yet'}
          paragraphs={[
            (lang && data.contents[0][lang].content) || 'No Content Yet'
          ]}
          theImg={data.contents[0].images[0]}
          color="#55B047"
        />
      )}

      {data.contents[1] && (
        <PostWithCenterImg
          title={(lang && data.contents[1][lang].title) || 'No Title Yet'}
          paragraphs={[
            (lang && data.contents[1][lang].content) || 'No Content Yet'
          ]}
          theVideo={data.contents[1].video}
          color="#1E455C"
        />
      )}
    </div>
  );
};

export default Cleft;

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community/7');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
