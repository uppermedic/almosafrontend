import React from 'react';
import CustomTabs from 'components/layout/CustomTabs';
import { useRouter } from 'next/router';

/*Content Components */
import SupportServiceSengle from './single';

export default function index({ dataSectionTabs, dataSectionContent }) {
  const router = useRouter();

  const data = dataSectionTabs.services.map(obj => {
    return {
      id: obj.id,
      title: { en: obj.en.title, ar: obj.ar.title },
      component: SupportServiceSengle,
      className: 'laboratory',
      path: '/services/supportive-services',
      dataType: 'dynamic'
    };
  });

  return (
    <section className="support-services-card">
      <div className="container-fluid">
        <CustomTabs items={data} dataContent={dataSectionContent} />
      </div>
    </section>
  );
}
