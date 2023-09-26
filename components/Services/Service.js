import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Service({ item }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <Link href={`/${locale}/services/${item.en.slug}`}>
      <a>
        <div
          className="service-card"
          style={{
            backgroundImage: `url(${
              item.thumbnail ||
              'https://image.shutterstock.com/image-photo/colored-wooden-blocks-diagonally-aligned-600w-1027385548.jpg'
            })`
          }}
        >
          <div className={`text-center ribbon`}>
            <h3>{locale ? item[locale].title : 'Loading'}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
