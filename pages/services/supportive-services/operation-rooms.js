import React from 'react';
import Head from 'src/components/layout/head';
import Content from 'src/components/Services/support-services/operation-rooms';

const OperationRooms = () => {
  const seo = {
    ar: {
      title: 'غرف العمليات',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Operation Rooms',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div className="operation-rooms">
      <Head data={seo}></Head>
      <Content />
    </div>
  );
};

export default OperationRooms;
