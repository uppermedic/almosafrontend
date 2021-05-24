import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import {
  getAllPosts as getAllPostsAction,
  getTags as getBlogTagsAction,
  getCategories as getBlogCategoriesAction
} from 'src/store/actions';
import { fetchData } from 'src/store/Request.js';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/MediaCenter/Blog';

const Index = ({
  data,
  tags,
  categories,
  blogData,
  router,

  getAllPosts,
  getBlogTags,
  getBlogCategories
}) => {
  const { seo, page_cover } = blogData.page;
  useEffect(() => {
    getAllPosts('/blog/articles', router.query);
    getBlogTags('/blog/tags');
    getBlogCategories('/blog/categories');
    return () => {};
  }, [router.query]);
  return (
    <div className="blog">
      <Head data={seo}></Head>
      <Hero bg={page_cover}></Hero>
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
  let { error, data: blogData } = await fetchData('/blog');
  if (error) {
    return {
      notFound: true
    };
  }
  return {
    // props: { data, blogData, tagsData, catData }
    props: { blogData }
  };
}

const mapStateToProps = state => ({
  data: state.Blog.posts,
  tags: state.Globals.tags,
  categories: state.Globals.categories
});

const mapDispatchToProps = {
  getAllPosts: getAllPostsAction,
  getBlogTags: getBlogTagsAction,
  getBlogCategories: getBlogCategoriesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
