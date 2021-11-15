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
  newsData,
  router,
  getAllPosts,
  getNewsTags,
  getNewsCategories
}) => {
  const { seo, page_cover } = newsData.page;
  const lang = i18n.language;
  useEffect(() => {
    getAllPosts('/blog/articles', router.query);
    getNewsTags('/blog/tags');
    getNewsCategories('/blog/categories');
    return () => {};
  }, [router.query]);
  return (
    <div className="news">
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
  let { error, data: newsData } = await fetchData('/blog');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { newsData }
  };
}

const mapStateToProps = state => ({
  data: state.News.posts,
  tags: state.Globals.tags,
  categories: state.Globals.categories
});

const mapDispatchToProps = {
  getAllPosts: getAllPostsAction,
  getNewsTags: getNewsTagsAction,
  getNewsCategories: getNewsCategoriesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
