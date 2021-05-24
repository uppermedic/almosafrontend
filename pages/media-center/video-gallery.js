import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Head from 'src/components/layout/head';
import Gallery from 'src/components/MediaCenter/VedioGallery';
import VideoPlayer from 'src/components/layout/VideoPlayer';
import { fetchData } from 'src/store/Request.js';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { getCategories as getMediaCategoriesAction } from 'src/store/actions';
import { serialize } from 'src/utils/helpers';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';

const Index = ({ data, getMediaCategories }) => {
  const head_data = {
    ar: {
      title: 'معرض الفيديو',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Video Gallery',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  const router = useRouter();
  const { last_page } = data;
  const [selectId, setselectId] = useState('all');
  useEffect(() => {
    getMediaCategories('/media/videos/categories');
    return () => {};
  }, []);

  const handleSelectChange = ({ target: { value } }) => {
    setselectId(value);
    if (value === 'all') {
      router.push(`?page=1`);
    } else if (value !== 'all') {
      //console.log('not all');
      router.push(`?category=${value}&page=1`);
    }
  };

  const handlePageClick = ({ selected }) => {
    if (selectId === 'all') {
      router.push(`?page=${selected + 1}`);
    } else {
      router.push(`?category=${selectId}&page=${selected + 1}`);
    }
  };

  return (
    <div className="video-Gallery">
      <Head data={head_data}></Head>
      <Gallery
        data={data}
        handleSelectChange={handleSelectChange}
        selectId={selectId}
      />
      <VideoPlayer />
      <Row>
        {/* <Col md={12} className="d-flex justify-content-center">
            <button>Show All</button>
          </Col> */}
        <Col xs={12} className="d-flex justify-content-center mb-4">
          <ReactPaginate
            nextLabel={<NextFC />}
            previousLabel={<PrevFC />}
            breakLabel={'...'}
            breakClassName={'break-me'}
            initialPage={0}
            pageCount={last_page}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </Col>
      </Row>
    </div>
  );
};

export async function getServerSideProps(context) {
  // //console.log(
  //   '🚀 ~ file: video-gallery.js ~ line 55 ~ getServerSideProps ~ context',
  //   context.query
  // );

  const { page, category } = context.query;
  const { query } = context;
  let path = `/media/videos?${serialize(query)}`;
  let { error, data } = await fetchData(path);

  if (error) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
const mapDispatchToProps = { getMediaCategories: getMediaCategoriesAction };
export default connect(null, mapDispatchToProps)(Index);
