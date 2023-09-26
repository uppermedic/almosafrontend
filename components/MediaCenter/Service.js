import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Service({ item, t }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <Link href={`/${locale}/${item.url}`}>
        <a>
          <div
            className="center-card"
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <div className={`text-center ribbon ${item.ribbon_class}`}>
              <h3>{t(String('menu:' + item.title).toLowerCase())}</h3>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
