import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from 'src/store/Request.js';

import { i18n } from 'root/i18n';
import Head from 'src/components/layout/head';
import Content from 'src/components/MediaCenter/News/SinglePost';
const Post = ({ data }) => {
  const { language } = i18n;
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (language && locale) {
      router.push(
        `/${language}/media-center/news/post/${String(data[language].title)
          .split(' ')
          .join('-')}/?id=${data.id}`
      );
    }
    return () => {};
  }, [language, locale]);

  return (
    <div className="_single-post-page">
      <Head data={data.seo}></Head>
      {data[language] && (
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
      props: { data }
    };
  } else {
    return {
      notFound: true
    };
  }
}

export default Post;
