import React from 'react';
import { withTranslation } from 'root/i18n';
import CustomTabs from 'components/layout/CustomTabs';

/*Content Components */
import library from '../HospitalAmenities/library';
import PageContent from 'components/reusableComponents/PageContent';

const ForVisitors = ({ contentData }) => {
  const items =
    contentData?.length > 0
      ? contentData.map((cont, idx) => {
          return {
            id: idx + 1,
            title: {
              en: cont['en']?.title,
              ar: cont['ar'].title
            },
            component: PageContent,
            content: cont
          };
        })
      : [];

  const itemsData = [
    ...items,
    {
      id: 11,
      title: {
        en: 'library',
        ar: 'المكتبة'
      },
      component: library,
      className: 'library'
    }
  ];

  return (
    <section className="guide-cards">
      <div className="container-fluid">
        <CustomTabs items={itemsData} />
      </div>
    </section>
  );
};
export default withTranslation(['menu', 'patient_guide'])(ForVisitors);
