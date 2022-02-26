import React, { useEffect } from 'react';
import Head from 'src/components/layout/head';
import SectionHeading from 'src/components/Services/medical-programs/program/SectionHeading';
import Content from 'src/components/Services/medical-programs/program/content';
import { fetchData } from 'src/store/Request.js';
import { i18n } from 'root/i18n';
import { useRouter } from 'next/router';
import { removeSpChar } from 'src/utils/helpers';

const HairTranplant = ({ data }) => {
  const lang = i18n.language;
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if (lang && locale) {
      router.push(
        `/${locale}/services/medical-programs/${removeSpChar(
          String(data.seo[locale].title)
        )
          .split(' ')
          .join('-')}/?id=${data.id}`
      );
    }
  }, [lang, locale]);
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
