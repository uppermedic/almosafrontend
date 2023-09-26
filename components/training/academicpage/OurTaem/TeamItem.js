import React from 'react';
import { useRouter } from 'next/router';

function NewsItem({team }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="item caro-card">
      <a href={locale ? String(team[locale]?.url) : '#'} target="_blank">
        <img src={team.image} alt="academic" />
        <div className="content-card">
          <h3>{locale && team[locale]?.name}</h3>
          <span>{locale && team[locale]?.title}</span>
        </div>
      </a>
    </div>
  );
}

export default NewsItem;
