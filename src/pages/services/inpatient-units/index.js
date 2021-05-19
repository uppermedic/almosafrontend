import React from 'react';
import Hero from 'src/components/layout/Hero';
import Inpatient from 'src/components/Services/inpatient';

export default function MedicalCenters() {
  return (
    <div className="inpatient-units">
      <Hero bg="/images/services/inpatient-units/inpatient-units.png">
        <div className="overlay-1">
          <div className="overlay-2">
            <div className="title">Inpatient Units</div>
          </div>
        </div>
      </Hero>
      <Inpatient />
    </div>
  );
}
