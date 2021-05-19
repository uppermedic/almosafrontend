import React from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
export default function CenterCards({ item }) {
  return (
    <div className="item">
      <p className="qoute-text">{item.qoute}</p>
      <div className="owl-item-caption">
        <p>{item.patient_name}</p>
        <h3>{item.dr_name}</h3>
      </div>
      <style>
        {`
                    .owl-item {
                    }
                    
                `}
      </style>
    </div>
  );
}
