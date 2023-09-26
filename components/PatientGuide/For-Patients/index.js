import React from 'react';
import CustomTabs from 'components/layout/CustomTabs';

/*Content Components */
import familyRights from './family-rights';
import Insurance from './insurance';

import PageContent from 'components/reusableComponents/PageContent';

const Index = ({ contentData }) => {
  const items =
    contentData?.length > 0
      ? contentData.map((cont, idx) => {
          if (cont?.name?.toLowerCase().includes('insurance')) {
            return {
              id: idx + 1,
              title: {
                en: cont['en']?.title,
                ar: cont['ar'].title
              },
              component: Insurance,
              className: 'insurance',
              content: cont
            };
          } else if (
            cont?.name?.toLowerCase().includes('patient and family rights')
          ) {
            return {
              id: idx + 1,
              title: {
                en: cont['en']?.title,
                ar: cont['ar'].title
              },
              component: familyRights,
              className: 'family-rights-page',
              content: cont
            };
          } else {
            return {
              id: idx + 1,
              title: {
                en: cont['en']?.title,
                ar: cont['ar'].title
              },
              component: PageContent,
              content: cont
            };
          }
        })
      : [];

  return (
    <section className="guide-cards">
      <div className="container-fluid">
        <CustomTabs items={items} />
      </div>
    </section>
  );
};

export default Index;
