import React from 'react';
import { useRouter } from 'next/router';

const Taps = ({tap, handleClick, tapId }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <li className="tap mx-1" onClick={handleClick}>
      <a className={tapId === tap.id ? 'active' : ''}>
        {locale && tap[locale].title}
      </a>
    </li>
  );
};

export default Taps;
