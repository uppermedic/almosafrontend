import React, { useEffect } from 'react';
import Head from 'src/components/layout/head';
import SectionHeading from 'src/components/Services/medical-programs/program/SectionHeading';
import Content from 'src/components/Services/medical-programs/program/content';
import { fetchData } from 'src/store/Request.js';
import { i18n } from 'root/i18n';
import { hairTransplantData } from 'src/constants/DB.js';
import { useRouter } from 'next/router';

const HairTranplant = ({ data }) => {
  const { aboutData, hairPostData } = hairTransplantData;
  const lang = i18n.language;
  const router = useRouter();

  useEffect(() => {
    router.push(
      `/services/medical-programs/${
        lang && String(data.seo[lang].title).split(' ').join('-')
      }?id=${data.id}`
    );
    return () => {};
  }, [lang]);
  return (
    <div className="hair-transplant">
      <Head data={data.seo}></Head>
      <SectionHeading data={data} />
      {(data['sections'].length > 0 || data['physicians'].length > 0) && (
        <Content physicians={data['physicians']} data={data.sections} />
      )}
      {/* <Content physicians={data['physicians']} data={data.sections} /> */}
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
export default HairTranplant;
