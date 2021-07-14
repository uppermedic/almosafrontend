import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from 'src/store/Request.js';
import Center from 'src/components/Services/medical-centers/center';
import { i18n } from 'root/i18n';
import Head from 'src/components/layout/head';
import Hero from '../../../components/layout/Hero';

const Post = ({ data }) => {
  const lang = i18n.language;
  const router = useRouter();
  useEffect(() => {
    router.push(
      `/services/medical-centers/${
        lang && String(data.seo[lang].title).split(' ').join('-')
      }?id=${data.id}`
    );
    return () => {};
  }, [lang]);

  return (
    <div className="_single-post-page single-medical-center">
      <Head data={data['seo']} />
      <Hero>
        <img src={data.image} alt="hero-cover" className="hero-cover" />
        <div className="hero-content">
          <h2 className="title">{lang && data.seo[lang].title}</h2>
        </div>
      </Hero>
      {data['sections'].length > 0 && (
        <Center data={data} sections={data['sections']} seo={data['seo']} />
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
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
      props: { data }
    };
  } else {
    return {
      notFound: true
    };
  }
}

export default Post;
