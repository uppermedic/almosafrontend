import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Service({ item, t }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="guide-card" style={{ backgroundImage: `url(${item.bg})` }}>
      <Link href={`/${locale}/${item.url}`}>
        <a>
          <div className={`text-center ribbon ${item.ribbon_class}`}>
            <div className="the-pattrn">
              <img src="/images/pattern.svg" alt="pattern" />
            </div>
            <h3>{t(`menu:${String(item.title).toLowerCase()}`)}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
}
