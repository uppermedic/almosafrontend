import React from 'react';
import { strippedContent } from 'src/utils/helpers.js';
export default function CenterCards({ item }) {
  return (
    <div className="item">
      <p className="qoute-text">
        <div
          dangerouslySetInnerHTML={{
            __html: (item?.body && strippedContent(item?.body)) || ''
          }}
        />
      </p>
      <div className="owl-item-caption">
        <p>{item.patient_name}</p>
        <h3>{item.dr_name}</h3>
      </div>
    </div>
  );
}
