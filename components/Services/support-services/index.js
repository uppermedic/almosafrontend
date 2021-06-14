import React from 'react';
import CustomTabs from 'components/layout/CustomTabs';
import { useRouter } from 'next/router';

/*Content Components */
import SupportServiceSengle from './single';
import pharmacy from '../../PatientGuide/HospitalAmenities/pharmacy';
import Nursing from './Nursing';

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

  const pharmacyData = [
    {
      id: 1,
      title: { en: 'The Pharmacy', ar: 'الصيدلية' },
      component: pharmacy,
      className: 'pharmacy',
      path: '/services/supportive-services',
      dataType: 'static'
    },
    {
      id: 2,
      title: { en: 'Nursing Department', ar: 'قسم التمريض' },
      component: Nursing,
      className: 'nursing',
      path: '/services/supportive-services',
      dataType: 'static'
    }
  ];
  return (
    <section className="support-services-card">
      <div className="container-fluid">
        <CustomTabs
          items={[...pharmacyData, ...data]}
          dataContent={dataSectionContent}
        />
      </div>
    </section>
  );
}
