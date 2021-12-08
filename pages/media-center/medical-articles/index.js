import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import {
  getAllPosts as getAllPostsAction,
  getTags as getMedicalTagsAction,
  getCategories as getMedicalCategoriesAction
} from 'src/store/actions';
import { fetchData } from 'src/store/Request.js';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/MediaCenter/MedicalArticles';
import { i18n } from 'root/i18n';

const Index = ({
  data,
  tags,
  categories,
  medicalArticals,
  medicalArticalsData,
  router,
  getAllPosts,
  getMedicalTags,
  getMedicalCategories
}) => {
  const { seo, page_cover } = medicalArticals?.page;
  const lang = i18n.language;

  useEffect(() => {
    getMedicalTags('/blog/tags');
    getMedicalCategories('/blog/categories');
  }, [router.query]);

  return (
    <div className="medical-articles">
      <Head data={seo}></Head>
      <Hero bg={page_cover}>
        <div className="hero-content">
          <h1 className="title">{lang && seo[lang].title} </h1>
        </div>
      </Hero>
      <Content
        data={medicalArticalsData}
        latest={medicalArticalsData?.data?.slice(0, 3)}
        tags={tags}
        categories={categories}
      />
    </div>
  );
};
export async function getServerSideProps(context) {
  const { page } = context.query;
  //settings
  let { error: error1, data: medicalArticals } = await fetchData(
    '/blog/medical-article'
  );
  let { error: error2, data: medicalArticalsData } = await fetchData(
    `/blog/articles?type=medical-article&page=${page}`
  );
  if (error1 || error2) {
    return {
      notFound: true
    };
  }
  return {
    props: { medicalArticals, medicalArticalsData }
  };
}

const mapStateToProps = state => ({
  // data: state.NewsMedical.posts,
  tags: state.Globals.tags,
  categories: state.Globals.categories
});

const mapDispatchToProps = {
  // getAllPosts: getAllPostsAction,
  getMedicalTags: getMedicalTagsAction,
  getMedicalCategories: getMedicalCategoriesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
