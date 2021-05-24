import React from 'react';
import Markdown from 'markdown-to-jsx';
import { truncate, strippedContent } from 'src/utils/helpers.js';
export default function CenterCards({ item }) {
  return (
    <div className="item">
      <p className="qoute-text">
        <Markdown>{(item.body && strippedContent(item.body)) || ''}</Markdown>
      </p>
      <div className="owl-item-caption">
        <p>{item.patient_name}</p>
        <h3>{item.dr_name}</h3>
      </div>
    </div>
  );
}
