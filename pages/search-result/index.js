import { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'src/components/layout/head';
import { getAllPosts as getAllPostsAction } from 'src/store/actions';
import { withRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Content from 'src/components/SearchResult';

const Index = ({ router, data, getAllPosts }) => {
  const head_data = {
    ar: {
      title: 'مستشفى الموسى',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Almoosa Hospital',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    } 
  };
  useEffect(() => {
    getAllPosts(
      `/all/search`,
      `search_query=${router?.query?.search}&page=${router?.query?.page}`
    );
  }, [router?.query]); 
  return (
    <div className="news-search-result">
      <Head data={head_data}></Head>
      <Content data={data} />
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.NewsMedical.posts
});

const mapDispatchToProps = {
  getAllPosts: getAllPostsAction
};

export async function getStaticProps({ locale }) {
  return {
    props: {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
