import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ForPatients from '../Card';
import { i18n, withTranslation } from 'root/i18n';
import CustomTabs from 'components/layout/CustomTabs';

/*Content Components */
import familyRights from './family-rights';
import responsibilities from './responsibilities';
import Insurance from './insurance';
import medicalRecords from './medical-records';
import disabledAccess from './disabled-access';
import preparingAppointment from './preparing-appointment';
import planningStay from './planning-hospital-stay';
import preparingProcedure from './preparing-procedure';
import patientComplains from './patient-complains';
import parking from '../directions_parking';
import hospitalitServices from '../HospitalAmenities/hospitality-services';
import wifi from '../HospitalAmenities/wifi';
import interpreterServices from '../For-Visitors/interpreter-services';
import mosques from '../For-Visitors/mosques';
import tabebyService from '../HospitalAmenities/tabeby-service';
import atms from '../HospitalAmenities/atms';
import supportGroubs from '../HospitalAmenities/support-groubs';
import gardens from './Gardens';
import bicycleUse from './BicycleUse';

const data = [
  {
    id: 1,
    title: {
      en: 'Patient and Family Rights',
      ar: 'اللوائح الخاصة بحقوق المرضى وذويهم'
    },
    component: familyRights,
    className: 'family-rights-page'
  },
  {
    id: 2,
    title: {
      en: 'Patient Responsibilities',
      ar: 'اللوائح الخاصة بالواجبات والمسؤوليات التي يتحملها المرضى وأسرهم'
    },
    component: responsibilities,
    className: 'patients-responsibilities-page'
  },
  {
    id: 3,
    title: { en: 'Insurance', ar: 'شركات التأمين' },
    component: Insurance,
    className: 'insurance'
  },
  {
    id: 4,
    title: { en: 'Request Medical Report', ar: 'طلب تقرير طبي' },
    component: medicalRecords,
    className: 'medical-records'
  },
  {
    id: 5,
    title: {
      en: 'Disabled Access & Services',
      ar: 'خدمات ذوي الاحتياجات الخاصة'
    },
    component: disabledAccess,
    className: 'disabled-access'
  },
  {
    id: 6,
    title: { en: 'Preparing For Your Appointment', ar: 'التحضير لموعدك' },
    component: preparingAppointment,
    className: 'preparing-appointment'
  },
  {
    id: 7,
    title: {
      en: 'Planning your Hospital Stay',
      ar: 'تخطيط إقامتك في المستشفى'
    },
    component: planningStay,
    className: 'planning-hospital-stay'
  },
  {
    id: 8,
    title: {
      en: 'Preparing For Medical Procedures',
      ar: 'التحضير للإجراءات الطبية'
    },
    component: preparingProcedure,
    className: 'preparing-procedure'
  },
  {
    id: 9,
    title: { en: 'Patient Complains', ar: 'شكاوي المرضى' },
    component: patientComplains,
    className: 'patient-complains'
  },
  {
    id: 10,
    title: { en: 'Parking and Valet', ar: 'المواقف وخدمة صف السيارات' },
    component: parking,
    className: 'directions'
  },
  {
    id: 11,
    title: { en: 'Hospitality services', ar: 'خدمات الضيافة' },
    component: hospitalitServices,
    className: 'hospitality-services'
  },
  {
    id: 12,
    title: { en: 'Wi-Fi', ar: 'خدمة الواي فاي' },
    component: wifi,
    className: 'wifi-page'
  },
  {
    id: 13,
    title: {
      en: 'Gardens and greenery',
      ar: 'الحدائق والمساحات الخارجية'
    },
    component: gardens,
    className: 'gardens'
  },
  {
    id: 14,
    title: { en: 'Bike to work', ar: ' مبادرة ركوب الدراجات' },
    component: bicycleUse,
    className: 'bicycle-use'
  },
  {
    id: 15,
    title: { en: 'Interpreter Services', ar: 'خدمات الترجمة' },
    component: interpreterServices,
    className: 'interpreter-services'
  },
  {
    id: 16,
    title: { en: 'Mosques', ar: 'المسجد' },
    component: mosques,
    className: 'mosques'
  },
  {
    id: 17,
    title: { en: 'TABEBY Service', ar: 'خدمة طبيبي' },
    component: tabebyService,
    className: 'tabeby-service'
  },

  {
    id: 18,
    title: { en: 'ATMs', ar: 'أجهزة الصراف الالي' },
    component: atms,
    className: 'atms'
  },
  {
    id: 19,
    title: { en: 'ASH Support Groups', ar: 'مجموعات الدعم' },
    component: supportGroubs,
    className: 'support-groubs'
  }
];
const Index = ({ t }) => {
  return (
    <section className="guide-cards">
      <div className="container-fluid">
        <CustomTabs items={data} />
      </div>
    </section>
  );
};

export default withTranslation(['menu', 'patient_guide'])(Index);
