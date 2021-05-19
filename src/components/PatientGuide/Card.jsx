import React from "react";
export default function PatientFeatures({ item }) {
  return (
    <div className="guide-card-item">
      <div className={`text-center feature ${item.feature_color}`}>
        <h3>{item.content}</h3>
      </div>
    </div>
  );
}
