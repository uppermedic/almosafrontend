import React, { useState, useEffect } from 'react';
import { i18n } from 'root/i18n';
import Link from 'next/link';
import { removeSpChar } from 'src/utils/helpers';

const doctor_card = ({ doctor, setcurrentDoctor }) => {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

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
      href={`/${locale}/our-doctors/${removeSpChar(
        String(doctor[language]?.name)
      )
        .split(' ')
        .join('-')}/?id=${doctor?.id}`}
    >
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
