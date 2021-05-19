import React from 'react';
import { Link } from 'root/i18n';

export default function PatientFeatures({ item }) {
  return (
    <div className="card-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <Link href={item.path ? item.path : ''}>
          <a>
            <span>Read More,</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
