import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { PostWithCenterImg } from 'src/components/reusableComponents/Post';
import SmallGallery from 'src/components/SmallGallery';
import { i18n } from 'root/i18n';
import Markdown from 'markdown-to-jsx';
import { strippedContent } from 'src/utils/helpers.js';
import { fetchData } from 'src/store/Request.js';

const Paramedic = ({ data }) => {
  const lang = i18n.language;
  const head_data = {
    ar: {
      title: 'مبادرة مسعف لكل مدرسة',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Paramedic in Each School',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <section className="paramedic">
      <Head data={head_data}></Head>
      <Hero bg={data.cover_image}>
        <div className="banner">
          <img src="/images/heading-banner.svg" alt="banner" />
          <h3>
            <span>{lang && data[lang].title} </span>
          </h3>
        </div>
      </Hero>

      <PostWithCenterImg
        title={lang && data.contents[0][lang].title}
        paragraphs={[lang && data.contents[0][lang].content]}
        theVideo={data.contents[0].video}
        color="#1E455C"
      />

      <PostWithCenterImg
        title={lang && data.contents[1][lang].title}
        paragraphs={[lang && data.contents[1][lang].content]}
        color="#54AF46"
      />
      <SmallGallery
        imgs={data.contents[2].images.map(img => {
          return img;
        })}
        bgColor="#EFEAE0"
      />
      <PostWithCenterImg
        title={lang && data.contents[3][lang].title}
        theVideo={data.contents[3].video}
        color="#1E455C"
      />
    </section>
  );
};

export default Paramedic;

export async function getServerSideProps(context) {
  let { error, data } = await fetchData('/community/9');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
