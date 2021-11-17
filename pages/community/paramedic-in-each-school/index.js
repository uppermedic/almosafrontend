import React from 'react';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import { PostWithCenterImg } from 'src/components/reusableComponents/Post';
import SmallGallery from 'src/components/SmallGallery';
import { i18n } from 'root/i18n';
import { fetchData } from 'src/store/Request.js';

const Paramedic = ({ data }) => {
  const lang = i18n.language;

  return (
    <section className="paramedic">
      <Head data={data.seo} />
      <Hero bg={data.cover_image}>
        <div className="hero-content">
          <h1 className="title">{lang && data[lang].title} </h1>
        </div>
      </Hero>

      {data.contents[0] && (
        <PostWithCenterImg
          title={lang && data.contents[0][lang].title}
          paragraphs={[lang && data.contents[0][lang].content]}
          theVideo={data.contents[0].video}
          color="#1E455C"
        />
      )}

      {data.contents[1] && (
        <PostWithCenterImg
          title={lang && data.contents[1][lang].title}
          paragraphs={[lang && data.contents[1][lang].content]}
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
          title={lang && data.contents[3][lang].title}
          theVideo={data.contents[3].video}
          color="#1E455C"
        />
      )}
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
