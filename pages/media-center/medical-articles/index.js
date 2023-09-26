import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter, withRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  getAllPosts as getAllPostsAction,
  getTags as getMedicalTagsAction,
  getCategories as getMedicalCategoriesAction
} from 'src/store/actions';
import { fetchData } from 'src/store/Request.js';
import Head from 'src/components/layout/head';
import Hero from 'src/components/layout/Hero';
import Content from 'src/components/MediaCenter/MedicalArticles';

const Index = ({
  data,
  tags,
  categories,
  medicalArticals,
  medicalArticalsData,
  getAllPosts,
  getMedicalTags,
  getMedicalCategories
}) => {
  const { seo, page_cover } = medicalArticals?.page;
  const router = useRouter();
  const { locale } = router;

  const titleHero = locale && seo[locale]?.title;

  useEffect(() => {
    getMedicalTags('/blog/tags');
    getMedicalCategories('/blog/categories');
  }, [router.query]);

  return (
    <div className="medical-articles">
      <Head data={seo}></Head>
      <Hero bg={page_cover}>
        <div className="hero-content">
          <h1 className="title">{titleHero} </h1>
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
  const locale=context.locale
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
    props: {
      medicalArticals,
      medicalArticalsData,
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
