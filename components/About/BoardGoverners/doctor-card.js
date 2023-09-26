import React from 'react';
import { removeSpChar } from 'src/utils/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';

const doctor_card = ({ doctor, setcurrentDoctor, hasRef }) => {
  const router = useRouter();
  const { locale } = router;

  const handleClick = async () => {
    setcurrentDoctor(doctor);
    localStorage.setItem('doctor', JSON.stringify(doctor));
  };
  return (
    <Link
      href={
        hasRef
          ? `/${locale}/about/board-directors-and-executive-team/${removeSpChar(
              String(doctor[locale]?.slug)
            )}/?id=${doctor?.id}`
          : '#'
      }
    >
      <a>
        <div className="card" onClick={handleClick}>
          <img src={doctor.image} alt={locale && doctor[locale].name} />
          <div className="banner">
            <h4>{locale && doctor[locale].name}</h4>
            <p>{locale && doctor[locale].title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default doctor_card;
