import React from 'react';
import { useRouter } from 'next/router';

export default function Service({ item }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <a target="_blank" href={item.url} rel="noopener noreferrer nofollow">
      <div className="card-item">
        <div className="overlay"></div>
        <div className={`text-center ribbon`}>
          <h3>{locale && item[locale].title}</h3>
        </div>
        <img src={item.image} alt="hakeem-magazine" />
      </div>
    </a>
  );
}
