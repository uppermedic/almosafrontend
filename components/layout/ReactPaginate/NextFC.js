import React, { Fragment } from 'react';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';
import { i18n } from 'root/i18n';
export default function NextFC() {
  const { language } = i18n;
  return (
    <Fragment>
      {language === 'en' && <BsChevronDoubleRight />}
      {language === 'ar' && <BsChevronDoubleLeft />}
    </Fragment>
  );
}
