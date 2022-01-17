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
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/MediaCenter/News';
import { i18n } from 'root/i18n';

const Index = ({
  data,
  tags,
  categories,
  news,
  newsData,
  router,
  getAllPosts,
  getNewsTags,
  getNewsCategories
}) => {
  const { seo, page_cover } = news?.page;
  const lang = i18n.language;
  const titleHero = lang && seo[lang]?.title;
  useEffect(() => {
    getNewsTags('/blog/tags');
    getNewsCategories('/blog/categories');
    return () => {};
  }, [router.query]);
  return (
    <div className="news">
      <Head data={seo}></Head>
      <Hero bg={page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
        </div>
      </Hero>
      <Content
        data={newsData}
        latest={newsData?.data?.slice(0, 3)}
        tags={tags}
        categories={categories}
      />
    </div>
  );
};
export async function getServerSideProps(context) {
  //settings
  const { page } = context.query;
  let { error: error1, data: news } = await fetchData('/blog');
  let { error: error2, data: newsData } = await fetchData(
    `/blog/articles?type=blog&page=${page}`
  );
  if (error1 || error2) {
    return {
      notFound: true
    };
  }
  return {
    props: { news, newsData }
  };
}

const mapStateToProps = state => ({
  // data: state.NewsMedical.posts,
  tags: state.Globals.tags,
  categories: state.Globals.categories
});

const mapDispatchToProps = {
  // getAllPosts: getAllPostsAction,
  getNewsTags: getNewsTagsAction,
  getNewsCategories: getNewsCategoriesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
