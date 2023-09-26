import React from 'react';
import Link from 'next/link';
import { removeSpChar } from 'src/utils/helpers';
import { useRouter } from 'next/router';

const doctor_card = ({ doctor, setcurrentDoctor }) => {
  const router = useRouter();
  const { locale } = router;

  const handleClick = () => {
    setcurrentDoctor(doctor);
    if (window.innerWidth < 992) {
      window.scrollTo(0, 700);
    } else {
      window.scrollTo(0, 900);
    }
  };
  return (
    <Link
      href={`/${locale}/our-doctors/${removeSpChar(String(doctor[locale]?.name))
        .split(' ')
        .join('-')}/?id=${doctor?.id}`}
    >
      <a className="card" onClick={handleClick}>
        <img src={doctor.image} alt={locale && doctor[locale].name} />
        <div className="banner">
          <h4>{locale && doctor[locale].name}</h4>
          <p>{locale && doctor[locale].title}</p>
        </div>
      </a>
    </Link>
  );
};

export default doctor_card;
