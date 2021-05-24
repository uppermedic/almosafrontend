import React, { useEffect } from 'react';
import Head from 'src/components/layout/head';
import Content from 'src/components/Services/inpatient/Single';
import { fetchData } from 'src/store/Request.js';
import { i18n } from 'root/i18n';
import { useRouter } from 'next/router';
const IntensiveCare = ({ data }) => {
  const lang = i18n.language;
  const router = useRouter();
  useEffect(() => {
    router.push(
      `/services/inpatient-units/${
        lang && String(data.seo[lang].title).split(' ').join('-')
      }?id=${data.id}` || '#'
    );
    return () => {};
  }, [lang]);

  return (
    <div className="intensive-care mb-50">
      <Head data={data.seo}></Head>
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
  if (context.query.id) {
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

export default IntensiveCare;
