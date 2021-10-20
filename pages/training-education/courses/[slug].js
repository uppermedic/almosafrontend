import React, { useEffect } from 'react';
import CurseInfo from 'src/components/training/course-info';
import Head from 'src/components/layout/head';
import { fetchData } from 'src/store/Request.js';
import { i18n } from 'root/i18n';
import { useRouter } from 'next/router';

const Event = ({ data }) => {
  const lang = i18n.language;
  const router = useRouter();

  useEffect(() => {
    if (lang) {
      router.push(
        `/${lang}/training-education/courses/${String(data[lang].title)
          .split(' ')
          .join('-')}?id=${data.id}`
      );
    }
  }, [lang]);

  return (
    <div>
      <Head data={data}></Head>
      <CurseInfo data={data} />
    </div>
  );
};

export default Event;

export async function getServerSideProps(context) {
  if (context.query.id) {
    let { error, data } = await fetchData(
      `/education/single/${context.query.id}`
    );
    if (error || !data) {
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
