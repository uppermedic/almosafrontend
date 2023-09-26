import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import {
  getAllPosts as getAllPostsAction,
  getTags as getNewsTagsAction,
  getCategories as getNewsCategoriesAction
} from 'src/store/actions';
import { fetchData } from 'src/store/Request.js';
import Head from 'src/components/layout/head';
import Content from 'src/components/MediaCenter/FilterResults';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = ({
  tags,
  categories,
  data,
  router,
  getAllPosts,
  getNewsTags,
  getNewsCategories
}) => {
  const seo = {
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
    getNewsTags('/blog/tags');
    getNewsCategories('/blog/categories');
    return () => {};
  }, [router.query]);
  return (
    <div className="news">
      <Head data={seo}></Head>
      <Content
        data={data}
        latest={data?.data?.slice(0, 3)}
        tags={tags}
        categories={categories}
      />
    </div>
  );
};
export async function getServerSideProps(context) {
  //settings
  const locale = context.locale;
  const { page, cats, tag } = context.query;
  let { error, data } = await fetchData(
    encodeURI(`/blog/articles?cats=${cats}&tags=${tag}&page=${page}`)
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
}

const mapStateToProps = state => ({
  tags: state.Globals.tags,
  categories: state.Globals.categories
});

const mapDispatchToProps = {
  getNewsTags: getNewsTagsAction,
  getNewsCategories: getNewsCategoriesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
