import React from 'react';
import PageContent from 'components/reusableComponents/PageContent';

const GoldenDesignation = ({ contentData }) => {
  return (
    <section className="page-section">
      {contentData?.length > 0 &&
        contentData?.map(cont => <PageContent itemContent={cont} />)}
    </section>
  );
};

export default GoldenDesignation;
