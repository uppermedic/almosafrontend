import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';

export default function PrevFC() {
  const router = useRouter();
  const { locale } = router;

  return (
    <Fragment>
      {locale === 'en' && <BsChevronDoubleLeft />}
      {locale === 'ar' && <BsChevronDoubleRight />}
    </Fragment>
  );
}
