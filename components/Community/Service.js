import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Service({ item, index }) {
  const router = useRouter();
  const { locale } = router;


  return (
    <Link href={`/${locale}/community/${item.en.slug}`}>
      <a>
        <div
          className="content-card"
          style={{ backgroundImage: `url(${item.thumbnail})` }} // will be handle according to the slug
        >
          <div className={`text-center ribbon ribbon-${index}`}>
            <h4>{locale && item[locale].title}</h4>
          </div>
        </div>
      </a>
    </Link>
  );
}
