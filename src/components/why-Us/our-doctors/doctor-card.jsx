import React from "react";

const doctor_card = ({ doctor }) => {
  return (
    <div className="card">
      <img src={doctor.img} alt={doctor.name} />
      <div className="banner">
        <h4>{doctor.name}</h4>
        <p>{doctor.position}</p>
      </div>
    </div>
  );
};

export default doctor_card;
