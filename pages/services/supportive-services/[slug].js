import React, { useEffect } from 'react';
import { fetchData } from 'src/store/Request.js';
import Content from 'src/components/Services/support-services/single';
import Head from 'src/components/layout/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Post = ({ data }) => {
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (locale) {
      router.push(
        `/${locale}/services/supportive-services/${removeSpChar(
          String(data.seo[locale].title)
        )
          .split(' ')
          .join('-')}/?id=${data.id}` || '#'
      );
    }
  }, [locale, data]);

  return (
    <div className="laboratory">
      <Head data={data['seo']}></Head>
      <Content
        data={data}
        sections={data['sections']}
        physicians={data['physicians']}
        seo={data['seo']}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const locale = context.locale;
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
