import React, { Fragment } from 'react';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';

export default function NextFC() {
  const router = useRouter();
  const { locale } = router;

  return (
    <Fragment>
      {locale === 'en' && <BsChevronDoubleRight />}
      {locale === 'ar' && <BsChevronDoubleLeft />}
    </Fragment>
  );
}
