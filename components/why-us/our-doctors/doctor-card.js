import React from 'react';
import { i18n } from 'root/i18n';
import Link from 'next/link';

const doctor_card = ({ doctor, setcurrentDoctor }) => {
  const { language } = i18n;
  const handleClick = () => {
    setcurrentDoctor(doctor);
    if (window.innerWidth < 992) {
      window.scrollTo(0, 700);
    } else {
      window.scrollTo(0, 900);
    }
  };
  return (
    <Link href={`/our-doctors/${doctor.slug}`}>
      <a className="card" onClick={handleClick}>
        <img src={doctor.image} alt={language && doctor[language].name} />
        <div className="banner">
          <h4>{language && doctor[language].name}</h4>
          <p>{language && doctor[language].title}</p>
        </div>
      </a>
    </Link>
  );
};

export default doctor_card;
