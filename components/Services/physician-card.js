import React from 'react';
import { i18n } from 'root/i18n';

const Physician = ({ doctor, setcurrentDoctor }) => {
  const { language } = i18n;
  const handleClick = () => {
    setcurrentDoctor(doctor);
    if (window.innerWidth < 992) {
      window.scrollTo(0, 1100);
    } else {
      window.scrollTo(0, 900);
    }
  };
  return (
    <div className="card" onClick={handleClick}>
      <img src={doctor.image} alt={language && doctor[language].name} />
      <div className="banner">
        <h4>{language && doctor[language].name}</h4>
        <p>{language && doctor[language].title}</p>
      </div>
    </div>
  );
};

export default Physician;
