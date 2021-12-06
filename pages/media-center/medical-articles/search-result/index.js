import { useEffect } from 'react';

import { connect } from 'react-redux';
import Head from 'src/components/layout/head';
import { getAllPosts as getAllPostsAction } from 'src/store/actions';
import { withRouter } from 'next/router';

import Content from 'src/components/MediaCenter/MedicalArticles/SearchResult';

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
    getAllPosts(`/search/${router.query.search}`);
    return () => {};
  }, []);
  return (
    <div className="medical-articles-search-result">
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));