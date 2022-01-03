import React, { useEffect, useState } from 'react';
import { i18n, Link } from 'root/i18n';
import { removeSpChar } from 'src/utils/helpers';

const doctor_card = ({ doctor, setcurrentDoctor, hasRef }) => {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  const handleClick = async () => {
    setcurrentDoctor(doctor);
    localStorage.setItem('doctor', JSON.stringify(doctor));
  };
  return (
    <Link
      href={
        hasRef
          ? `/${locale}/about/board-directors-and-executive-team/${
              language && removeSpChar(String(doctor[language]?.slug))
            }/?id=${doctor?.id}`
          : '#'
      }
    >
      <a>
        <div className="card" onClick={handleClick}>
          <img src={doctor.image} alt={language && doctor[language].name} />
          <div className="banner">
            <h4>{language && doctor[language].name}</h4>
            <p>{language && doctor[language].title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default doctor_card;
