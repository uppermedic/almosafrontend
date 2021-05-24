import React, { useEffect, useState } from 'react';
import Head from 'src/components/layout/head';
import Gallery from 'src/components/MediaCenter/PhotoGallery';
import { fetchData } from 'src/store/Request.js';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { getCategories as getMediaCategoriesAction } from 'src/store/actions';
import { serialize } from 'src/utils/helpers';
import NextFC from 'src/components/layout/ReactPaginate/NextFC';
import PrevFC from 'src/components/layout/ReactPaginate/PrevFC';

function index({ data, getMediaCategories }) {
  const router = useRouter();
  const [tapId, settapId] = useState('all');
  const { last_page } = data;
  const head_data = {
    ar: {
      title: 'معرض الصور',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Photo Gallery',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };

  useEffect(() => {
    getMediaCategories('/media/photos/categories');
    return () => {};
  }, []);

  const handleSelectTap = value => {
    settapId(value);
    if (value === 'all') {
      router.push(`?page=1`);
    } else if (value !== 'all') {
      //console.log('not all');
      router.push(`?category=${value}&page=1`);
    }
  };

  const handlePageClick = ({ selected }) => {
    if (tapId === 'all') {
      router.push(`?page=${selected + 1}`);
    } else {
      router.push(`?category=${tapId}&page=${selected + 1}`);
    }
  };

  return (
    <div className="photo-Gallery">
      <Head data={head_data}></Head>
      <Gallery
        data={data.images}
        handleSelectTap={handleSelectTap}
        tapId={tapId}
      />
      <Row>
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
}

export async function getServerSideProps(context) {
  const { query } = context;
  let path = `/media/photos?${serialize(query)}`;
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
export default connect(null, mapDispatchToProps)(index);
