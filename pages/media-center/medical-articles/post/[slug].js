import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from 'src/store/Request.js';
import { removeSpChar } from 'src/utils/helpers';
import Head from 'src/components/layout/head';
import Content from 'src/components/MediaCenter/MedicalArticles/SinglePost';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Post = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale) {
      router.push(
        `/${locale}/media-center/medical-articles/post/${removeSpChar(
          String(data[locale].title)
        )
          .split(' ')
          .join('-')}/?id=${data.id}`
      );
    }
    return () => {};
  }, [locale]);

  return (
    <div className="_single-post-page">
      <Head data={data.seo}></Head>
      {data[locale] && (
        <Content
          article={data}
          tags={data['tags']}
          categories={data['categories']}
          related={data['related']}
        />
      )}
    </div>
  );
};
export async function getServerSideProps(context) {
  const locale = context.locale;
  if (context.query.id) {
    //settings
    let { error, data } = await fetchData(
      `/blog/articles/single/${context.query.id}`
    );
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
  } else {
    return {
      notFound: true
    };
  }
}

export default Post;
