import React from 'react';
import PageContent from 'components/reusableComponents/PageContent';

const PrivacyPolicy = ({ contentData }) => {
  return (
    <section className="privacy">
      {contentData?.length > 0 &&
        contentData?.map(cont => <PageContent itemContent={cont} />)}
    </section>
  );
};

export default PrivacyPolicy;
