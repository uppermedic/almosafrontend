import { i18n, Link, withTranslation } from 'root/i18n';
import React from 'react';
import CustomTabs from 'components/layout/CustomTabs';
import { useRouter } from 'next/router';

/*Content Components */
import SupportServiceSengle from './Single';

const Inpatient = ({ dataSectionTabs, dataSectionContent }) => {
  const router = useRouter();
  const data = dataSectionTabs.services.map(obj => {
    return {
      id: obj.id,
      title: { en: obj.en.title, ar: obj.ar.title },
      component: SupportServiceSengle,
      className: 'intensive-care',
      path: '/services/inpatient-units',
      dataType: 'dynamic'
    };
  });

  return (
    <section className="inpatient-units-content">
      <div className="container-fluid">
        <CustomTabs items={data} dataContent={dataSectionContent} />
      </div>
    </section>
  );
};
export default withTranslation('common')(Inpatient);
