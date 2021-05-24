import React from 'react';
import { i18n, Link } from 'root/i18n';

const doctor_card = ({ doctor, setcurrentDoctor, hasRef }) => {
  const { language } = i18n;
  const handleClick = async () => {
    setcurrentDoctor(doctor);
    localStorage.setItem('doctor', JSON.stringify(doctor));
  };
  return (
    <Link
      href={
        hasRef ? `/about/board-directors-and-executive-team/${doctor.id}` : '#'
      }
    >
      <div className="card" onClick={handleClick}>
        <img src={doctor.image} alt={language && doctor[language].name} />
        <div className="banner">
          <h4>{language && doctor[language].name}</h4>
          <p>{language && doctor[language].title}</p>
        </div>
      </div>
    </Link>
  );
};

export default doctor_card;
