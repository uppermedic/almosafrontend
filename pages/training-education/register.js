import React from 'react';
import Regisiter from 'src/components/training/register';
import Head from 'src/components/layout/head';

const register = () => {
  const head_data = {
    ar: {
      title: 'التسجيل',
      meta_description: 'ميتا',
      meta_keywords: 'ميتا',
      url: ''
    },
    en: {
      title: 'Register',
      meta_description: 'meta',
      meta_keywords: '',
      url: ''
    }
  };
  return (
    <div>
      <Head data={head_data}></Head>
      <Regisiter />
    </div>
  );
};

export default register;
