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
    if (lang) {
      router.push(
        `/${lang}/services/medical-centers/${String(data.seo[lang].title)
          .split(' ')
          .join('-')}?id=${data.id}`
      );
    }
  }, [lang]);

  return (
    <div className="_single-post-page single-medical-center">
      <Head data={data['seo']} />
      <Hero bg={data.image}>
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

// export async function getStaticPaths({ locales }) {
// const paths = []

// locales.forEach((locale, i) => {
// posts.forEach((post, i) => {
//   paths.push({ params: { slug: post.id }, locale })
// });
// });

//   return { paths, fallback: false }
// }

export default Post;
