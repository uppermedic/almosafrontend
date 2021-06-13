import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withTranslation } from 'root/i18n';
import Card from '../Card';
import CustomTabs from 'components/layout/CustomTabs';

/*Content Components */
import visitingHours from './visiting-hours';
import waitingAreas from './waiting-areas';
import mosques from './mosques';
import library from '../HospitalAmenities/library';
import disabledAccess from '../For-Patients/disabled-access';
import parking from '../directions_parking';
import hospitalitServices from '../HospitalAmenities/hospitality-services';
import wifi from '../HospitalAmenities/wifi';
import atms from '../HospitalAmenities/atms';
import gardens from '../For-Patients/Gardens';
import giftShop from './giftShop';

const data = [
  {
    id: 1,
    title: { en: 'Visiting Hours and Policies', ar: 'ساعات الزيارة' },
    component: visitingHours,
    className: 'visiting-hours'
  },
  {
    id: 2,
    title: { en: 'Waiting Areas', ar: 'أماكن الإنتظار' },
    component: waitingAreas,
    className: 'waiting-areas'
  },
  {
    id: 4,
    title: { en: 'Mosques', ar: 'المسجد' },
    component: mosques,
    className: 'mosques'
  },
  {
    id: 5,
    title: { en: 'Parking and valet parking', ar: 'المواقف وخدمة صف السيارات' },
    component: parking,
    className: 'directions'
  },
  {
    id: 6,
    title: { en: 'Hospitality Services', ar: 'خدمات الضيافة' },
    component: hospitalitServices,
    className: 'hospitality-services'
  },
  {
    id: 7,
    title: { en: 'Wi-Fi', ar: 'خدمة الواي فاي' },
    component: wifi,
    className: 'wifi-page'
  },
  {
    id: 8,
    title: {
      en: 'Gardens and outdoor spaces',
      ar: 'الحدائق والمساحات الخارجية '
    },
    component: gardens,
    className: 'gardens'
  },
  {
    id: 9,
    title: { en: 'ATMs', ar: 'أجهزة الصراف الالي' },
    component: atms,
    className: 'atms'
  },
  {
    id: 10,
    title: {
      en: 'Gift shop',
      ar: 'متجر الورد والهدايا '
    },
    component: giftShop,
    className: 'gift-shop'
  },
  {
    id: 11,
    title: {
      en: 'library',
      ar: 'المكتبة'
    },
    component: library,
    className: 'library'
  },
  {
    id: 12,
    title: {
      en: 'Disabled Access & Services',
      ar: 'خدمات ذوي الاحتياجات الخاصة'
    },
    component: disabledAccess,
    className: 'disabled-access'
  }
];
const ForVisitors = ({ t }) => {
  return (
    <section className="guide-cards">
      <div className="container-fluid">
        <CustomTabs items={data} />
      </div>
    </section>
  );
};
export default withTranslation(['menu', 'patient_guide'])(ForVisitors);
