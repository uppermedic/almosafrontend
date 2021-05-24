import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from 'src/store/Request.js';
import Content from 'src/components/Services/support-services/single';
import { i18n } from 'root/i18n';
import Head from 'src/components/layout/head';
const Post = ({ data }) => {
  const lang = i18n.language;
  const router = useRouter();
  console.log('dataSingle', data);
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
