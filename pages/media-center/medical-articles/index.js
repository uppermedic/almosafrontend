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
  medicalArticalsData,
  router,
  getAllPosts,
  getMedicalTags,
  getMedicalCategories
}) => {
  const { seo, page_cover } = medicalArticalsData.page;
  const lang = i18n.language;
  useEffect(() => {
    // getAllPosts('/blog/articles', `type=medical-articles&${router.query}`);
    // getMedicalTags('/blog/tags');
    // getMedicalCategories('/blog/categories');
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
        data={data}
        latest={data.data.slice(0, 3)}
        tags={tags}
        categories={categories}
      />
    </div>
  );
};
export async function getServerSideProps(context) {
  //settings
  let { error, data: medicalArticalsData } = await fetchData('/blog');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { medicalArticalsData }
  };
}

const mapStateToProps = state => ({
  data: state.NewsMedical.posts,
  tags: state.Globals.tags,
  categories: state.Globals.categories
});

const mapDispatchToProps = {
  getAllPosts: getAllPostsAction,
  getMedicalTags: getMedicalTagsAction,
  getMedicalCategories: getMedicalCategoriesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
