import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MedicalCenter from './MedicalCenter';
import { i18n } from 'root/i18n';

export default function index({ data }) {
  const lang = i18n.language;

  const editedData = data.map((item, index) => {
    if (item.icon && item.bg) {
      return item;
    } else {
      return {
        ...item,
        icon:
          (helperData[index] && helperData[index].icon) ||
          '/images/services/medical-centers/Group-13.png',
        bg:
          (helperData[index] && helperData[index].bg) ||
          '/images/services/medical-centers/Image-15.png',
        path: (helperData[index] && helperData[index].path) || '#'
      };
    }
  });

  return (
    <section className="centers">
      <div className="container">
        <Row>
          <Col>
            <h2>{(lang == 'en' && 'Medical Centers') || 'مراكز طبية'}</h2>
          </Col>
        </Row>
        <Row xs="1" sm="1" md="2" lg="3">
          {editedData.map(item => (
            <Col key={item.id} className="px-lg-5 cols">
              <MedicalCenter item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

const helperData = [
  {
    id: 1,
    title: 'cardiology center',
    bg: '/images/services/medical-centers/Image-2.png',
    icon: '/images/services/medical-centers/Group-13.png',
    path: '/services/medical-centers/cardiology-center'
  },
  {
    id: 2,
    title: 'Orthopedic Center',
    bg: '/images/services/medical-centers/Image-3.png',
    icon: '/images/services/medical-centers/Group-13.png',
    path: '/services/medical-centers/orthopedic-center'
  },
  {
    id: 3,
    title: 'Ophthalmology Center ',
    bg: '/images/services/medical-centers/Image-4.png',
    icon: '/images/services/medical-centers/Group-13.png',
    path: '/services/medical-centers/ophthalmology-center'
  },
  {
    id: 4,
    title: 'Neurosciences Center',
    bg: '/images/services/medical-centers/Image-5.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 5,
    title: 'Dental center',
    bg: '/images/services/medical-centers/Image-6.png',
    icon: '/images/services/medical-centers/Group-14.png'
  },
  {
    id: 6,
    title: 'Bariatric Center',
    bg: '/images/services/medical-centers/Image-7.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 7,
    title: 'Women’s Health Center',
    bg: '/images/services/medical-centers/Image-8.png',
    icon: '/images/services/medical-centers/Group-15.png'
  },
  {
    id: 8,
    title: 'Surgery Center',
    bg: '/images/services/medical-centers/Image-9.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 9,
    title: 'Pediatrics Center',
    bg: '/images/services/medical-centers/Image-10.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 10,
    title: 'Sleep Disorders Center',
    bg: '/images/services/medical-centers/Image-11.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 11,
    title: 'Emergency Center',
    bg: '/images/services/medical-centers/Image-12.png',
    icon: '/images/services/medical-centers/Group-16.png'
  },
  {
    id: 12,
    title: 'Oncology Center',
    bg: '/images/services/medical-centers/Image-13.png',
    icon: '/images/services/medical-centers/Group-13.png'
  },
  {
    id: 13,
    title: 'Internal Medicine Center',
    bg: '/images/services/medical-centers/Image-14.png',
    icon: '/images/services/medical-centers/Group-17.png'
  },
  {
    id: 14,
    title: 'Nephrology and the Hemodialysis center',
    bg: '/images/services/medical-centers/Image-15.png',
    icon: '/images/services/medical-centers/Group-13.png'
  }
];
