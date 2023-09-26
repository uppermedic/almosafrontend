import React from 'react';
import { useRouter } from 'next/router';

const Physician = ({ doctor, setcurrentDoctor }) => {
  const router = useRouter();
  const { locale } = router;

  const handleClick = () => {
    setcurrentDoctor(doctor);
    if (window.innerWidth < 992) {
      window.scrollTo(0, 1100);
    } else {
      window.scrollTo(0, 700);
    }
  };
  return (
    <div className="card" onClick={handleClick}>
      <img src={doctor.image} alt={locale && doctor[locale].name} />
      <div className="banner">
        <h4>{locale && doctor[locale].name}</h4>
        <p>{locale && doctor[locale].title}</p>
      </div>
    </div>
  );
};

export default Physician;
